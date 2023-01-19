import { FOOD_FETCH_DATA } from "./typeAction";

const baseUrl = "http://localhost:3009/items";

export function fetchFoods() {
    return async (dispatch) => {
        try {
            let data = await fetch(baseUrl)
            let convert = await data.json()

            dispatch({
                type: FOOD_FETCH_DATA,
                payload: convert
            })
        } catch (err) {
            console.log(err);
        }
    }
}