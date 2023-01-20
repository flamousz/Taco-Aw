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


export function postCategory(body) {
     return async () => {
          try {
               let data = await fetch(`${baseUrl}/form`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                })
                let convert = await data.json()
                return convert.message
                
          } catch (err) {
               toast.error(`${err.message}`)
          }
     };
}

export function deleteCategory(id) {
     return async (dispatch) => {
          try {
               let data = await fetch(`${baseUrl}/${id}`, {
                    method: 'delete'
                })
                let convert = await data.json()
                toast.success(`${convert.message}`)
                dispatch(fetchCategory())
          } catch (err) {
               toast.error(`${err.message}`)
          }
     };
}
