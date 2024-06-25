//layouts

//pages
import HomePage from "../pages/auth/HomePage";
import VideoPage from "../pages/auth/VideoPage";
import Login from "../components/auth/Login";

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, layout: null },
    { path: '/video', component: VideoPage, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };