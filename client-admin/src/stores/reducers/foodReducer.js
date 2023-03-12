import { FOOD_FETCH_DATA } from "../actions/typeAction";

let initialState = {
     foods: [],
};

export default function foodReducer(state = initialState, action) {

     
     switch (action.type) {
          case FOOD_FETCH_DATA:
               return {
                    ...state,
                    foods: action.payload,
               };

          default:
               return state;
     }
}


/*

This is a Redux reducer for handling the food state. A reducer is a pure function that takes the current state and an action as arguments and returns the new state. The reducer receives the current state and an action dispatched from the application and returns a new state based on the action.

In this reducer, the initial state is an object that contains an empty array for foods. The FOOD_FETCH_DATA case is a switch statement that returns a new state with the updated foods array, which is retrieved from the action's payload property.

When the FOOD_FETCH_DATA action is dispatched, the reducer updates the foods array in the state to the new value specified in the action's payload. If the reducer receives an action that doesn't match any of the cases in the switch statement, it simply returns the current state.

*/