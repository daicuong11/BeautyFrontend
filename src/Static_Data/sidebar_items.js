import { Book, BookImage, Diamond, Droplet, HelpCircle, LayoutDashboard, Settings, ShoppingCart, Zap } from "lucide-react";

const sidebarItems = [
    {
        id: 0,
        icon: <LayoutDashboard />,
        text: 'Dashboard',
        isAlert: false,
        href: '/admin/dashboard',
    },
    {
        id: 1,
        icon: <Zap />,
        text: 'Bài sales',
        isAlert: false,
        href: '/admin/intro',
    },
    {
        id: 2,
        icon: <ShoppingCart />,
        text: 'Đơn hàng',
        isAlert: false,
        href: '/admin/orders',
    },
    {
        id: 3,
        icon: <Diamond />,
        text: 'Dịch vụ',
        isAlert: false,
        href: '/admin/services',
    },
    {
        id: 4,
        icon: <Book />,
        text: 'Đào tạo',
        isAlert: false,
        href: '/admin/courses',
    },
    {
        id: 5,
        icon: <Droplet />,
        text: 'Mỹ phẩm',
        isAlert: false,
        href: '/admin/cosmetics',
    },
    {
        id: 6,
        icon: <BookImage />,
        text: 'Bộ sưu tập',
        isAlert: false,
        href: '/admin/collections',
    },
    {
        id: 7,
        icon: <Settings />,
        text: 'Cài đặt',
        isAlert: false,
        href: '/admin/settings',
    },
    {
        id: 8,
        icon: <HelpCircle />,
        text: 'Trợ giúp',
        isAlert: false,
        href: '/admin/helps',
    },
];

export default sidebarItems;