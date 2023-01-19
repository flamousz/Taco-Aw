// import { router } from "json-server";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryList from "../views/CategoryList";
import DashboardPage from "../views/DashboardPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/',
                element: <DashboardPage />
            },
            {
                path: '/categories',
                element: <CategoryList />
            }
        ]
    }
])

export default router