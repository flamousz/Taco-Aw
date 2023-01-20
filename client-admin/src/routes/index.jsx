// import { router } from "json-server";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryList from "../views/CategoryList";
import CategoryPostPage from "../views/CategoryPostPage";
import DashboardPage from "../views/DashboardPage";
import IngredientPage from "../views/IngredientPage";
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
            },
            {
                path: '/categories/form',
                element: <CategoryPostPage />
            },
            {
                path: '/ingredients/:id',
                element: <IngredientPage />
            }
        ]
    }
])

export default router