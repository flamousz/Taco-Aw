import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./stores";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<ToastContainer
					position='bottom-left'
					autoClose={1700}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				<RouterProvider router={router} />
			</div>
		</Provider>
	);
};

export default App;
