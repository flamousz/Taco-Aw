import { FOOD_DETAIL_FETCH_DATA, FOOD_FETCH_DATA } from "./typeAction";

let baseUrl = "http://localhost:3009/items";

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
               console.log(err);
          }
     };
}

export function fetchDetailFoods(id) {
     return async (dispatch) => {
          try {
               let data = await fetch(`${baseUrl}/${id}`);
               let convert = await data.json();
               dispatch({
                    type: FOOD_DETAIL_FETCH_DATA,
                    payload: convert,
               });
               return convert
          } catch (err) {
            throw err
          }
     };
}
