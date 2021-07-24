import DashboardLayout from "../components/layouts/dashboard-layout/DashboardLayout";
import Dashboard from "../views/dashboard/Dashboard";
import Category from "../views/category/Category";


const routes = [
    {
        path: '/categories',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            layout: DashboardLayout,
            //middleware: []
        },
        exact: true
    },
    {
        path: '/categories/:category_id',
        name: 'Dashboard',
        component: Category,
        meta: {
            layout: DashboardLayout,
        },
        exact: true
    },
];

export default routes;