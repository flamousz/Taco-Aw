import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDetailIngredient } from "../stores/actions/ingredientAction";
import { useSelector, useDispatch } from "react-redux";

export default function IngredientPage() {
     const { id } = useParams();
     let ingredient = useSelector(
          (state) => state.ingredientReducer.ingredient
     );
     let dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchDetailIngredient(id));
     }, [id]);
     console.log(ingredient, "<<< ini ingredient");
     if (!ingredient) {
        return (
            <>
                <h1>LOADING</h1>
            </>
        )
     }
     
     return (

          <section className="bg-gray-50 dark:bg-gray-900">
               <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-pink-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                   Ingredients
                              </h1>
                              <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                   <div className="flex flex-col justify-center">
                                        <thead className="text-xs bg-blue-400 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                             <tr>
                                                  <th
                                                       scope="col"
                                                       className="px-6 py-3"
                                                  >
                                                       No
                                                  </th>
                                                  <th
                                                       scope="col"
                                                       className="px-6 py-3"
                                                  >
                                                       Name
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody className="bg-red-200 ">
                                             {ingredient.Ingredients.map(
                                                  (el, index) => {
                                                       return (
                                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                                 <td className="px-6 py-4">
                                                                      {index +
                                                                           1}
                                                                 </td>
                                                                 <td className="px-6 py-4">
                                                                      {el.name}
                                                                 </td>
                                                            </tr>
                                                       );
                                                  }
                                             )}
                                        </tbody>
                                   </div>
                                   <div className="flex justify-center mt-4 ">
                                        <div className=" flex col ">
                                             <div>
                                                  <Link
                                                       type="submit"
                                                       to={'/'}
                                                       className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                  >
                                                       Close
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </table>
                         </div>
                    </div>
               </div>
          </section>
     );
}
