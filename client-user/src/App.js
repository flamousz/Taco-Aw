import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./views/HomePage";
import { RouterProvider } from 'react-router-dom'
import router from "./routes";

const App = () => {
     return (
          // RouterProvider menerima sebuah props namanya router ambil dari routers/index.jsx yang tadi sudah kita buat
          <RouterProvider router={router} />

          // <div className="putih" >
          //      <Navbar />
          //      <HomePage />
          // </div>

     );
}

export default App;
