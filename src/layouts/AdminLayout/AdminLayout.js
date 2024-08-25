import Sidebar, { SidebarItem } from './Sidebar/Sidebar';
import sidebarItems from '../../Static_Data/sidebar_items';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header/Header';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickSidebarItem = (index) => {
        navigate(sidebarItems[index].href);
    }

    return (
        <main className="flex max-h-screen overflow-hidden">
            <div className="hidden sm:block">
                <Sidebar >
                    {sidebarItems.map((item, index) => {
                        if (index === sidebarItems.length - 2) {
                            return (
                                <span key={index}>
                                    <hr className='my-3' />
                                    <SidebarItem
                                        onClick={() => handleClickSidebarItem(index)}
                                        icon={item.icon}
                                        text={item.text}
                                        alert={item.isAlert}
                                        active={location.pathname.includes(item.href)}
                                    />
                                </span>
                            );
                        }
                        return (
                            <SidebarItem
                                key={index}
                                onClick={() => handleClickSidebarItem(index)}
                                icon={item.icon}
                                text={item.text}
                                alert={item.isAlert}
                                active={location.pathname.includes(item.href)}
                            />
                        )
                    })}
                </Sidebar>
            </div>
            <div className="relative flex-1 transition-all">
                <Header />
                <div className="h-[calc(100vh-68px)] overflow-y-auto mt-[68px] bg-gray-300">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;
