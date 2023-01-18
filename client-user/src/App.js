import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
     return (
          // RouterProvider menerima sebuah props namanya router ambil dari routers/index.jsx yang tadi sudah  dibuat
          <RouterProvider router={router} />
     );
};

export default App;
