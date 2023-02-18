import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";
import loadingReducer from "./loadingReducer";

let reducers = combineReducers({
	foodReducer,
	categoryReducer,
	ingredientReducer,
	loadingReducer,
});

export default reducers;
