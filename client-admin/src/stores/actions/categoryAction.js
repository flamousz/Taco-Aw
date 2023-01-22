import { toast } from "react-toastify";
import { CATEGORY_FETCH_DATA } from "./typeAction";

const baseUrl = "http://localhost:3009/categories";

export function fetchCategory() {
     return async (dispatch) => {
          try {
               let data = await fetch(baseUrl);
               let convert = await data.json();
               if (!data.ok) {
                    throw convert;
               }
               dispatch({
                    type: CATEGORY_FETCH_DATA,
                    payload: convert,
               });
               if (!data.ok) {
                    throw convert;
               }

               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}

export function postCategory(body) {
     return async (dispatch) => {
          try {
               let data = await fetch(`${baseUrl}/form`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
               });
               let convert = await data.json();
               dispatch(fetchCategory());
               if (!data.ok) {
                    throw convert;
               }
               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}

export function deleteCategory(id) {
     return async (dispatch) => {
          try {
               let data = await fetch(`${baseUrl}/${id}`, {
                    method: "delete",
               });
               let convert = await data.json();
               toast.success(`${convert.message}`);
               dispatch(fetchCategory());
          } catch (err) {
               toast.error(`${err.message}`);
          }
     };
}

export function editCategory(input) {
     return async (dispatch) => {
          try {
               const data = await fetch(`${baseUrl}/${input.id}`, {
                    method: "PUT",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
               });
               const convert = await data.json();
               if (!data.ok) {
                    throw convert;
               }
               dispatch(fetchCategory());
               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}
