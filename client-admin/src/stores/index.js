import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


let store = createStore( reducers, applyMiddleware(thunk) )



export default store