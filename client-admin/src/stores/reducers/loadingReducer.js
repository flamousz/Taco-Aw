import { IS_LOADING_FALSE, IS_LOADING_TRUE } from "../actions/typeAction";

const initialState = {
	isLoading: false,
};

export default function loadingReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING_TRUE:
			return {
				...state,
				isLoading: true,
			};
		case IS_LOADING_FALSE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
}


/*

This code defines a reducer function for handling state changes related to loading status in a Redux store. The reducer function takes two arguments, the current state and an action object, and returns a new state object.

The initial state object for the loading status is defined with a boolean value of false. The isLoading property in the state object is used to keep track of whether or not the application is currently loading data.

The reducer function uses a switch statement to determine how to update the state based on the type of action passed to it. There are two action types defined, IS_LOADING_TRUE and IS_LOADING_FALSE, which correspond to setting the isLoading property to true and false, respectively.

If the action type matches IS_LOADING_TRUE, the reducer returns a new state object with the isLoading property set to true. If the action type matches IS_LOADING_FALSE, the reducer returns a new state object with the isLoading property set to false. If neither of these action types match, the reducer returns the current state object unchanged.

This reducer function is intended to be used as one of the arguments to the combineReducers function, which combines multiple reducers into a single reducer function to be used in a Redux store.

*/