import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchCategory } from "../stores/actions/categoryAction";
import { editFood, postFood } from "../stores/actions/foodAction";

export default function FoodFormModals({
     visible,
     setModalsFalse,
     headerName,
     editFoodData,
}) {
     const dispatch = useDispatch();
     const categories = useSelector(
          (state) => state.categoryReducer.categories
     );

     const initialValue = {
          name: "",
          description: "",
          price: "",
          imgUrl: "",
          categoryId: "",
          ingredient: [
               {
                    name: "",
               },
          ],
     };

     const [inputForm, setInputForm] = useState(initialValue);

     const inputHandler = (e) => {
          let data = {
               ...inputForm,
               [e.target.name]: e.target.value,
          };
          setInputForm(data);
     };

     const ingredientInputHandler = (e, i) => {
          let data = {
               ...inputForm,
          };
          data.ingredient[i] = {
               [e.target.name]: e.target.value,
          };
          setInputForm(data);
     };

     const submitHandler = (e) => {
          e.preventDefault();
          if (headerName === "add") {
               dispatch(postFood(inputForm))
                    .then((data) => {
                         toast.success(`🦄 ${data}`);
                         setModalsFalse();
                         setInputForm(initialValue)
                    })
                    .catch((err) => {
                         toast.error(`${err.message}`);
                    });
          } else if (headerName === "edit") {
               dispatch(editFood(inputForm))
                    .then((data) => {
                         toast.success(data);
                         setModalsFalse();
                         setInputForm(initialValue)
                    })
                    .catch((err) => {
                         toast.error(`${err.message}`);
                    });
          }
     };

     useEffect(() => {
          if (headerName === "edit") {
               setInputForm(editFoodData);
          }
          dispatch(fetchCategory());
     }, [editFoodData]);
     if (!visible) {
          return;
     }
     return (
          <>
               <div className="w-full h-full top-0 bg-opacity-20 bg-slate-700 z-10 absolute">
                    {" "}
               </div>
               <div className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-fit xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                   {headerName === "add"
                                        ? "Create New Food"
                                        : headerName === "edit"
                                        ? "Edit Food"
                                        : ""}
                              </h1>
                              <form
                                   className="space-y-4 md:space-y-6"
                                   onSubmit={submitHandler}
                              >
                                   <div className="flex flex-col ">
                                        <div className="flex flex-row gap-10 ">
                                             <div className="">
                                                  <div>
                                                       <div>
                                                            <label
                                                                 htmlFor="name"
                                                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                 Name
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 name="name"
                                                                 value={
                                                                      inputForm.name
                                                                 }
                                                                 onChange={
                                                                      inputHandler
                                                                 }
                                                                 id="name"
                                                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                 placeholder="name ..."
                                                                 required=""
                                                            />
                                                       </div>

                                                       <div>
                                                            <label
                                                                 htmlFor="price"
                                                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                 Price
                                                            </label>
                                                            <input
                                                                 type="number"
                                                                 name="price"
                                                                 value={
                                                                      inputForm.price
                                                                 }
                                                                 onChange={
                                                                      inputHandler
                                                                 }
                                                                 id="price"
                                                                 placeholder="Price ...."
                                                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                 required=""
                                                            />
                                                       </div>

                                                       <div>
                                                            <label
                                                                 htmlFor="imgUrl"
                                                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                 Food Image
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 name="imgUrl"
                                                                 value={
                                                                      inputForm.imgUrl
                                                                 }
                                                                 onChange={
                                                                      inputHandler
                                                                 }
                                                                 id="imgUrl"
                                                                 placeholder="Food Image ...."
                                                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                 required=""
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                             {headerName === "add" ? (
                                                  <div>
                                                       <div>
                                                            <label
                                                                 htmlFor="ingredient"
                                                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                 Ingredients
                                                            </label>
                                                            {inputForm.ingredient.map(
                                                                 (
                                                                      el,
                                                                      index
                                                                 ) => {
                                                                      return (
                                                                           <div className="">
                                                                                <input
                                                                                     type="text"
                                                                                     name="name"
                                                                                     value={
                                                                                          el.name
                                                                                     }
                                                                                     onChange={(
                                                                                          e
                                                                                     ) =>
                                                                                          ingredientInputHandler(
                                                                                               e,
                                                                                               index
                                                                                          )
                                                                                     }
                                                                                     id="ingredient"
                                                                                     placeholder="Food Ingredient ...."
                                                                                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                                                                                     required=""
                                                                                />
                                                                           </div>
                                                                      );
                                                                 }
                                                            )}
                                                            <button
                                                                 type="button"
                                                                 className="bg-red-600"
                                                                 onClick={() => {
                                                                      let obj =
                                                                           {
                                                                                ...inputForm,
                                                                                ingredient:
                                                                                     [
                                                                                          ...inputForm.ingredient,
                                                                                          {
                                                                                               name: "",
                                                                                          },
                                                                                     ],
                                                                           };
                                                                      setInputForm(
                                                                           obj
                                                                      );
                                                                 }}
                                                            >
                                                                 add
                                                            </button>
                                                       </div>
                                                  </div>
                                             ) : (
                                                  ""
                                             )}

                                             <div>
                                                  <div>
                                                       <label
                                                            htmlFor="description"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                       >
                                                            Description
                                                       </label>
                                                       <textarea
                                                            id="description"
                                                            name="description"
                                                            value={
                                                                 inputForm.description
                                                            }
                                                            onChange={
                                                                 inputHandler
                                                            }
                                                            rows="2"
                                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Write your description here..."
                                                       ></textarea>
                                                  </div>
                                                  <div>
                                                       <label
                                                            htmlFor="categoryId"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                       >
                                                            Category
                                                       </label>
                                                       <select
                                                            className="form-select appearance-none block w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            aria-label="Default select example"
                                                            name="categoryId"
                                                            value={
                                                                 inputForm.categoryId
                                                            }
                                                            onChange={
                                                                 inputHandler
                                                            }
                                                       >
                                                            <option
                                                                 value=""
                                                                 disabled
                                                            >
                                                                 -- Categories
                                                                 List --
                                                            </option>
                                                            {categories.map(
                                                                 (el) => {
                                                                      return (
                                                                           <option
                                                                                value={
                                                                                     el.id
                                                                                }
                                                                                key={
                                                                                     el.id
                                                                                }
                                                                           >
                                                                                {
                                                                                     el.name
                                                                                }
                                                                           </option>
                                                                      );
                                                                 }
                                                            )}
                                                       </select>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex justify-center mt-4 ">
                                             <div className=" flex col gap-x-5 ">
                                                  <div>
                                                       <button
                                                            onClick={() => {
                                                                 setModalsFalse();
                                                            }}
                                                            type="button"
                                                            className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                       >
                                                            Cancel
                                                       </button>
                                                  </div>
                                                  <div>
                                                       <button
                                                            type="submit"
                                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                       >
                                                            Submit
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     );
}
