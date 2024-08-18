import { ChevronFirst, ChevronLast, LogOut } from 'lucide-react';
import { avatar_img, logo_admin_img } from '../../../assets/images';
import { createContext, useContext, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const SidebarContext = createContext();
const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen">
            <nav className="flex flex-col h-full bg-white border-r shadow-sm">
                <div className="flex items-center justify-between p-4">
                    <img className={`overflow-hidden transition-all h-9 ${expanded ? "w-32" : "w-0"}`} src={logo_admin_img} alt="" />
                    <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <SidebarContext.Provider value={{ expanded }} >
                    <div className="flex-1">
                        <ul className="px-3">
                            {children}
                        </ul>
                    </div>
                </SidebarContext.Provider>
                <div className="flex p-3 border-t">
                    <img className="w-10 h-10 rounded-md" src={avatar_img} alt='' />
                    <div className={`flex items-center justify-between 
                        overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}
                        `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">Thu Liễu</h4>
                            <span className="text-xs text-gray-600">thulieu@thamy.com</span>
                        </div>
                        <div data-tooltip-id="logout-tooltip" className="py-2 pl-3 text-gray-500 cursor-pointer hover:text-black">
                            <LogOut size={20} />
                            <Tooltip
                                id="logout-tooltip"
                                place="top"
                                content="Đăng xuất"
                                className='z-10'
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;

export const SidebarItem = ({ icon, text, active = false, alert = false, onClick = () => '' }) => {
    const { expanded } = useContext(SidebarContext)

    return (
        <li onClick={onClick} className={`relative flex items-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors group
        ${active
                ? 'bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:bg-indigo-50 text-gray-600'
            }
        `}>
            {icon}
            <span className={`overflow-hidden transition-all whitespace-nowrap
                ${expanded ? 'ml-3 w-52' : 'w-0'}`}>
                {text}
            </span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}></div>
            )}

            {!expanded && <div className={`
                absolute left-full rounded-md px-2 py-1 ml-6 whitespace-nowrap
                bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 -translate-x-3 transition-all z-10
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                `}>{text}</div>}
        </li>
    );
}