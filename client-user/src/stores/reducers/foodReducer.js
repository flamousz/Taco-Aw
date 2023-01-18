

let initialState = {
    foods: []
}

export default function foodReducer(state=initialState, action) {
    switch (action.type) {
        case 'foods/fetchFoods':
            return {
                ...state, foods: action.payload
            }
            
    
        default:
            return state         
    }
}