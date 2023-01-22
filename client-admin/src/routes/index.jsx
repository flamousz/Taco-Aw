// import { router } from "json-server";
import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryList from "../views/CategoryList";
import DashboardPage from "../views/DashboardPage";
import IngredientPage from "../views/IngredientPage";
import LoginPage from "../views/LoginPage";
import FoodFormModals from "../components/FoodFormModals"

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        loader: ()=>{
            if (!localStorage.access_token) {
                return redirect("/login");
              }
              return null;
        },
        children: [
            {
                path: '/',
                element: <DashboardPage />
            },
            {
                path: '/categories',
                element: <CategoryList />
            },
            {
                path: '/ingredients/:id',
                element: <IngredientPage />
            },
            {
                path: '/form',
                element: <FoodFormModals />
            }
        ]
    },
    {
        path: '/login',
        loader: ()=>{
            if (localStorage.access_token) {
                return redirect("/");
              }
              return null;
        },
        element: <LoginPage />
    },
])

export default router