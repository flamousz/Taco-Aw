import { toast } from "react-toastify";
import { loadingDone, loadingStart } from "./foodAction";
import { CATEGORY_FETCH_DATA } from "./typeAction";

const baseUrl = "http://localhost:3009/categories";
// const baseUrl = "https://taco-aw.foxhub.space/categories";

export function fetchCategory() {
     return async (dispatch) => {
          try {
               dispatch(loadingStart())
               const data = await fetch(baseUrl);
               const convert = await data.json();
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
          } finally {
               dispatch(loadingDone())
          }
     };
}

/*

This code exports a function called fetchCategory which is an asynchronous function that returns a function. The function takes in a parameter called dispatch, which is a function from the Redux store that allows dispatching actions to the store.

Inside the function, it first dispatches an action to set the isLoading state to true by calling the loadingStart action creator. This is to indicate that data is being loaded and can be used to display a loading spinner or animation on the UI.

Then it uses the fetch API to make a GET request to a baseUrl endpoint to retrieve data. Once the data is retrieved, it is converted to JSON format using the json() method. If the response from the server is not okay (status code outside the 200-299 range), the function throws the convert object, which contains the error message.

If the response is successful, the function dispatches an action with the CATEGORY_FETCH_DATA type and the converted data as the payload. This action updates the categoryReducer with the fetched category data.

Finally, the fetchCategory function dispatches another action to set the isLoading state to false by calling the loadingDone action creator. This is to indicate that data loading is complete.

If an error is caught, it is thrown again to be handled by the error handling mechanism in the calling code.

*/

export function postCategory(body) {
     return async (dispatch) => {
          try {
               const data = await fetch(`${baseUrl}/form`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
               });
               const convert = await data.json();
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
               const data = await fetch(`${baseUrl}/${id}`, {
                    method: "delete",
               });
               const convert = await data.json();
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
