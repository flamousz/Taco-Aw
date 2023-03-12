import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


let store = createStore( reducers, applyMiddleware(thunk) )



export default store

/*

This code is using the Redux library to create a store that holds the state of the application.

The createStore function is used to create the store by passing in the combined reducers from the reducers module. The second argument to createStore is applyMiddleware, which takes the thunk middleware as an argument.

thunk is a middleware that allows you to write action creators that return a function instead of an action object. This function can then be used to perform asynchronous operations, such as making API requests, before dispatching the actual action to update the store.

The resulting store is then exported as the default export of the module, which can be imported in other modules to access the state of the application and dispatch actions to update it.


In Redux, the store holds the state of the application and the actions are plain JavaScript objects that describe the changes to the state. When an action is dispatched, the store passes it to the reducer which updates the state based on the type and payload of the action.

*/