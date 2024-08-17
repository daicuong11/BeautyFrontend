//layouts
import HomeLayout from "../layouts/HomeLayout";

//pages
import HomePage from "../pages/auth/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import { CollectionsManagementPage, CosmeticsManagementPage, CoursesManagementPage, DashboardPage, HelpsPage, OrdersManagementPage, ServiceManagementPage, SettingsPage, StatisticsPage } from "../pages/admin/";

const publicRoutes = [
    { path: '/', component: HomePage, layout: HomeLayout },
    { path: '/admin/login', component: LoginPage, layout: null },
]

const privateRoutes = [
    { path: '/admin/dashboard', component: DashboardPage },
    { path: '/admin/statistics', component: StatisticsPage },
    { path: '/admin/orders', component: OrdersManagementPage },
    { path: '/admin/services', component: ServiceManagementPage },
    { path: '/admin/courses', component: CoursesManagementPage },
    { path: '/admin/cosmetics', component: CosmeticsManagementPage },
    { path: '/admin/collections', component: CollectionsManagementPage },
    { path: '/admin/settings', component: SettingsPage },
    { path: '/admin/helps', component: HelpsPage },
]

export { publicRoutes, privateRoutes };