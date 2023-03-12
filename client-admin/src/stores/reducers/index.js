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

/*

This code defines a root reducer using the combineReducers function provided by the redux library. The combineReducers function takes an object whose properties are different reducers and returns a single reducer function that can be used to create a Redux store.

In this case, the root reducer combines four different reducers:

foodReducer
categoryReducer
ingredientReducer
loadingReducer
Each of these reducers handles a different part of the application state related to food, categories, ingredients, and loading.

By combining these reducers using combineReducers, the root reducer can handle all the actions that are dispatched by the application and update the entire state accordingly.


a reducer is a pure function that takes in the current state and an action, and returns a new state. Reducers are used to update the state of an application in response to dispatched actions. When an action is dispatched, it is sent to all reducers, which then check the action type and update the state accordingly. The updated state is then returned by the reducer and used to update the application's store.

Reducers are responsible for updating specific parts of the state, based on the action they receive. The state is usually represented as an object, and each reducer updates a specific property of that object. By splitting the state into multiple reducers, it becomes easier to manage and maintain the state of the application.

*/
