import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./stores";

const App = () => {
     return (
          <Provider store={store}>
              
               <RouterProvider router={router} />
          </Provider>
     );
};

export default App;
