import { toast } from "react-toastify";
import { FOOD_DETAIL_FETCH_DATA, FOOD_FETCH_DATA, IS_LOADING_FALSE, IS_LOADING_TRUE } from "./typeAction";


let baseUrl = "http://localhost:3009/items";
// const baseUrl = "https://taco-aw.foxhub.space/items";


export function loadingStart() {
     return {
       type: IS_LOADING_TRUE,
     };
   }
   
   export function loadingDone() {
     return {
       type: IS_LOADING_FALSE,
     };
   }


export function fetchFoods() {
     return async (dispatch) => {
          try {
               dispatch(loadingStart())
               let data = await fetch(baseUrl);
               let convert = await data.json();
               dispatch({
                    type: FOOD_FETCH_DATA,
                    payload: convert,
               });
          } catch (err) {
               toast.error(`${err.message}`)
          } finally {
               dispatch(loadingDone())
          }
     };
}

export function fetchDetailFoods(id) {
     return async (dispatch) => {
          try {
               dispatch(loadingStart())
               let data = await fetch(`${baseUrl}/${id}`);
               let convert = await data.json();
               dispatch({
                    type: FOOD_DETAIL_FETCH_DATA,
                    payload: convert,
               });
               return convert
          } catch (err) {
            throw err
          } finally {
               dispatch(loadingDone())
          }
     };
}
