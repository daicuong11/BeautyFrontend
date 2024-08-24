import { useLocation } from 'react-router-dom';
import breadcrumbsRoutes from '../Static_Data/breadcrumbs_routes';

const useBreadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = paths.map((path, index) => {
        const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
        const route = breadcrumbsRoutes.find(route => route.path === fullPath);

        return route ? { title: route.title, path: fullPath } : null;
    }).filter(Boolean);

    return breadcrumbs;
};

export default useBreadcrumbs;
