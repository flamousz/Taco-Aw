import { useDispatch } from "react-redux";
import { useState } from 'react'
import { postCategory } from "../stores/actions/categoryAction";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryPostPage() {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const initialValue = {
          name: ''
     }
     const [inputForm, setInputForm] = useState(initialValue)

     function postState(val) {
          let data = {
               ...inputForm,
               [val.target.name]: val.target.value
          }
          setInputForm(data)
     }
     
     
     return (
          <section className="bg-gray-50 dark:bg-gray-900">
               <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                   Create New Category
                              </h1>
                              <form
                                   className="space-y-4 md:space-y-6"
                                   onSubmit={(e) => {
                                        e.preventDefault()
                                        dispatch(postCategory(inputForm))
                                             .then((data) => {
                                                  toast.success(`🦄🦄 ${data}`)
                                                  navigate('/categories')
                                             })
                                             .catch((err) => {
                                                  toast.error(`${err.message}`)
                                             })
                                   }}
                              >
                                   <div>
                                        <label
                                             for="name"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Name
                                        </label>
                                        <input
                                             type="text"
                                             name="name"
                                             value={inputForm.name}
                                             onChange={postState}
                                             id="name"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="Category ..."
                                             required=""
                                        />
                                   </div>
                                   <div className="flex justify-center ">
                                        <div className=" flex col gap-x-5 ">
                                             <div>
                                                  <Link
                                                       type="button"
                                                       to={'/categories'}
                                                       className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                  >
                                                       Cancel
                                                  </Link>
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
                              </form>
                         </div>
                    </div>
               </div>
          </section>
     );
}
