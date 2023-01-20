import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import routes from "./routes";
import store from "./stores";

function App() {
     return (
          <Provider store={store}>
               <div className="App">
                    <ToastContainer
                         position="bottom-left"
                         autoClose={1700}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="light"
                    />
                    <RouterProvider router={routes} />
               </div>
          </Provider>
     );
}

export default App;
