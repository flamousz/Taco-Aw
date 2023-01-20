import { INGREDIENT_DETAIL_FETCH_DATA } from "../actions/typeAction"

let initialState = {
    ingredient: null
}


export default function ingredientReducer(state= initialState, action) {
    switch (action.type) {
        case INGREDIENT_DETAIL_FETCH_DATA:
            return {
                ...state, 
                ingredient: action.payload
            }
    
        default:
            return state
    }
}