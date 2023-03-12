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

/*

The code defines the routing configuration for a React application using the react-router-dom package. It creates a BrowserRouter instance and defines a set of routes with different paths and associated components.

The MainLayout component wraps all the routes and is displayed as a layout for the entire application. It also contains a loader function that checks for the presence of an access token in localStorage. If there is no access token, the function redirects the user to the login page.

The routes themselves are defined as an array of objects with three properties: path, element, and loader. The path property defines the URL path for the route. The element property specifies the component that should be rendered when the path matches. The loader property is an optional function that can be used to add some logic to determine whether to render the component or redirect the user.

The available routes in this code are:

/ renders the DashboardPage component
/categories renders the CategoryList component
/ingredients/:id renders the IngredientPage component with the parameterized id
/form renders the FoodFormModals component
/login renders the LoginPage component, and if there is an access token, it redirects the user to the root path.
Once the routing configuration is defined, it is exported as a single router object that can be used in the application.

*/