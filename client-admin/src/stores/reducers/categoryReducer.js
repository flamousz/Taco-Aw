import { CATEGORY_FETCH_DATA } from "../actions/typeAction";

let initialState = {
     categories: [],
};

export default function categoryReducer(state = initialState, action) {
     switch (action.type) {
          case CATEGORY_FETCH_DATA:
               return {
                    ...state,
                    categories: action.payload,
               };

          default:
               return state;
     }
}
