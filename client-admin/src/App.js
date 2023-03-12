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

/*

This code exports a React component named App. The component is responsible for wrapping the entire application with necessary providers and configurations.

The Provider component is imported from the react-redux library and it takes the store object as a prop. This component is responsible for making the store object available to all components in the application. The store object is created using Redux's createStore function and is exported from a separate file stores.js. The store is an object that holds the application state and provides methods to update it.

The ToastContainer component is imported from the react-toastify library and is responsible for displaying toast messages. The autoClose prop sets the duration (in milliseconds) for which a toast message will remain visible before automatically closing. The position prop sets the location on the screen where the toast messages will appear.

The RouterProvider component is imported from the react-router-dom library and it takes the routes object as a prop. This component is responsible for making the routing functionality available to all components in the application.

Finally, the App component is exported as the default export of this module, so it can be imported and used in other parts of the application.

*/

