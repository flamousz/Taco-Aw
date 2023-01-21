import { toast } from "react-toastify";
import { FOOD_FETCH_DATA } from "./typeAction";

const baseUrl = "http://localhost:3009/items";

export function fetchFoods() {
     return async (dispatch) => {
          try {
               let data = await fetch(baseUrl);
               let convert = await data.json();

               dispatch({
                    type: FOOD_FETCH_DATA,
                    payload: convert,
               });
          } catch (err) {
            toast.error(`${err.message}`)
            
          }
     };
}

export function deleteFood(id) {
     return async (dispatch) => {
          try {
               let data = await fetch(`${baseUrl}/${id}`,{
                    method: 'DELETE'
               })
               let convert = await data.json()
               dispatch(fetchFoods())
               if (!data.ok) {
                    throw convert
               }
               return convert.message
          } catch (err) {
               throw err
          }
     }
}
