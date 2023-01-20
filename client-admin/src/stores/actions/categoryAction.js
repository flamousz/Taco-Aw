import { toast } from "react-toastify";
import { CATEGORY_FETCH_DATA } from "./typeAction";

const baseUrl = "http://localhost:3009/categories";

export function fetchCategory() {
     return async (dispatch) => {
          try {
               let data = await fetch(baseUrl);
               let convert = await data.json();

               dispatch({
                    type: CATEGORY_FETCH_DATA,
                    payload: convert,
               });
          } catch (err) {
               toast.error(`${err.message}`)
          }
     };
}
