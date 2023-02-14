import { INGREDIENT_DETAIL_FETCH_DATA } from "./typeAction"
import { toast } from "react-toastify";

const baseUrl = 'http://localhost:3009/ingredients'
// const baseUrl = "https://taco-aw.foxhub.space/ingredients";

export function fetchDetailIngredient(id) {
    return async (dispatch) => {
        try {
            let data = await fetch(`${baseUrl}/${id}`)
            let convert = await data.json()


            dispatch({
                type: INGREDIENT_DETAIL_FETCH_DATA,
                payload: convert
            })
        } catch (err) {
            toast.error(`${err.message}`)
        }
    }
}