import { FOOD_FETCH_DATA } from "../actions/typeAction";

let initialState = {
     foods: [],
     food: {},
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
