import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import store from "./stores";

function App() {
     return (
          <Provider store={store}>
               <RouterProvider router={routes} />
          </Provider>
     );
}

export default App;
