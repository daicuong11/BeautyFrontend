import Sidebar, { SidebarItem } from './Sidebar/Sidebar';
import sidebarItems from '../../Static_Data/sidebar_items';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    const [currentSidebarItemActive, setCurrentSidebarItemActive] = useState(0);
    const navigate = useNavigate();

    const handleClickSidebarItem = (index) => {
        navigate(sidebarItems[index].href);
        setCurrentSidebarItemActive(index);
    }

    return (
        <main className="flex">
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
                                    active={currentSidebarItemActive === index}
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
                            active={currentSidebarItemActive === index}
                        />
                    )
                })}
            </Sidebar>
            <div className="flex-1 transition-all">{children}</div>
        </main>
    );
};

export default AdminLayout;
