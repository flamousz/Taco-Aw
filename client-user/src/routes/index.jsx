import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../views/DetailPage";
import FoodsListPage from "../views/FoodsListPage";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
     {
          element: <MainLayout />,
          children: [
               {
                    // path dan element apa yg akan ditunjukan
                    path: "/",
                    element: <HomePage />,
               },
               {
                    path: "/foods",
                    element: <FoodsListPage />,
               },
               {
                    path: '/foods/:id',
                    element: <DetailPage />
               }
          ],
     },
]);

export default router;
