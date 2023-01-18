import { FOOD_DETAIL_FETCH_DATA, FOOD_FETCH_DATA } from "../actions/typeAction"


let initialState = {
    foods: [],
    food: {}
}

export default function foodReducer(state=initialState, action) {
    switch (action.type) {
        case FOOD_FETCH_DATA:
            return {
                ...state, foods: action.payload
            }
        
        case FOOD_DETAIL_FETCH_DATA:
            return {
                ...state, food: action.payload
            }
    
        default:
            return state         
    }
}