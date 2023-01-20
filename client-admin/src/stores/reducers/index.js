import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";

let reducers = combineReducers({
     foodReducer,
     categoryReducer,
});

export default reducers;
