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
                                    active={item.href === location.pathname}
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
                            active={item.href === location.pathname}
                        />
                    )
                })}
            </Sidebar>
            <div className="relative flex-1 transition-all">
                <Header />
                <div className="h-[calc(100vh-68px)] overflow-y-auto mt-[68px] p-4 bg-gray-100">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;
