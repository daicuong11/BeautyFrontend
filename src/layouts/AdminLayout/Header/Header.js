import { Bell } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Search from "../Search/MySearch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ModalDropDown from "../../../components/Modal/ModalDropDown";

const titleHeader = {
    '/admin/dashboard': 'Dashboard',
    '/admin/intro': 'Tin nóng',
    '/admin/orders': 'Đơn hàng',
    '/admin/services': 'Dịch vụ',
    '/admin/courses': 'Đào tạo',
    '/admin/cosmetics': 'Mỹ phẩm',
    '/admin/collections': 'Bộ sưu tập',
    '/admin/settings': 'Cài đặt',
    '/admin/helps': 'Trợ giúp',
};

const Header = () => {
    const location = useLocation();
    const [openNotificationModal, setOpenNotificationModal] = useState(false);

    return (
        <div className="w-full absolute top-0 left-0 right-0 shadow-md bg-white h-[68px] transition-all px-4 grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
            <div className="text-lg font-semibold">{titleHeader[location.pathname]}</div>
            <div className="hidden w-full sm:block">
                <Search />
            </div>
            <div className="flex items-center justify-end gap-2">
                <div onClick={() => setOpenNotificationModal(!openNotificationModal)} data-tooltip-id="notifications-tooltip" className="relative px-3 py-2 text-gray-500 cursor-pointer hover:text-black">
                    <Bell size={20} />
                    <Tooltip
                        id="notifications-tooltip"
                        place="bottom-end"
                        content="Thông báo"
                    />
                    <ModalDropDown open={openNotificationModal} onClose={() => setOpenNotificationModal(false)} location="bottom-start">
                        <div className="text-black w-96">
                            <h1 className="p-4 text-lg font-semibold">Thông báo</h1>
                            <div className="mb-4 text-center text-gray-500">Không có thông báo nào cả.</div>
                        </div>
                    </ModalDropDown>
                </div>
            </div>
        </div>
    );
}

export default Header;
