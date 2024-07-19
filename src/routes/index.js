//layouts

//pages
import HomePage from "../pages/auth/HomePage";
import Login from "../components/auth/Login";

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };