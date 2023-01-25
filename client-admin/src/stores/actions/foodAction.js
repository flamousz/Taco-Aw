import { toast } from "react-toastify";
import { FOOD_FETCH_DATA } from "./typeAction";

// const baseUrl = "http://localhost:3009/items";
const baseUrl = "https://taco-aw.foxhub.space/items";

export function fetchFoods() {
     return async (dispatch) => {
          try {
               const data = await fetch(baseUrl);
               const convert = await data.json();

               dispatch({
                    type: FOOD_FETCH_DATA,
                    payload: convert,
               });
          } catch (err) {
               toast.error(`${err.message}`);
          }
     };
}

export function postFood(input) {
     return async (dispatch) => {
          try {
               const data = await fetch(baseUrl, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
               });
               const convert = await data.json();
               if (!data.ok) {
                    throw convert;
               }
               dispatch(fetchFoods());
               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}

export function deleteFood(id) {
     return async (dispatch) => {
          try {
               const data = await fetch(`${baseUrl}/${id}`, {
                    method: "DELETE",
               });
               const convert = await data.json();
               dispatch(fetchFoods());
               if (!data.ok) {
                    throw convert;
               }
               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}

export function editFood(input) {
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
               dispatch(fetchFoods());
               return convert.message;
          } catch (err) {
               throw err;
          }
     };
}
