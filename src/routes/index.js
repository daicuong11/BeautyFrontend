//layouts
import HomeLayout from "../layouts/HomeLayout";

//pages
import HomePage from "../pages/auth/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import ServiceManagementPage from "../pages/admin/ServiceManagementPage";

const publicRoutes = [
    { path: '/', component: HomePage, layout: HomeLayout },
    { path: '/admin/login', component: LoginPage, layout: null },
]

const privateRoutes = [
    { path: '/admin/service-management', component: ServiceManagementPage },
]

export { publicRoutes, privateRoutes };