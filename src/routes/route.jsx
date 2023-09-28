import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import Login from "../pages/Auth/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import Signup from "../pages/Auth/Signup";
import Transactions from "../pages/Transactions";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            }, {
                path: '/dashboard/transactions',
                element: <Transactions />
            }
        ]
    }
]);

export default router