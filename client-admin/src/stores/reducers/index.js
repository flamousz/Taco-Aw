import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";

let reducers = combineReducers({
     foodReducer,
     categoryReducer,
     ingredientReducer
});

export default reducers;
