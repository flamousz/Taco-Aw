import { useDispatch } from "react-redux";
import { deleteCategory } from '../stores/actions/categoryAction'

export default function CategoryTableRow({categories, index}) {
     let dispatch = useDispatch()
     function deleteCategories(id) {
          dispatch(deleteCategory(id))
     }
     
     return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4">{index+1}</td>
               <td className="px-6 py-4">{categories.name}</td>
               <td className="px-6 py-4">{categories.createdAt}</td>
               <td className="px-6 py-4">{categories.createdAt}</td>
               <td className="px-6 py-4 ">
                    <a
                         href="#"
                         onClick={() => deleteCategories(categories.id)}
                         className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                         Delete
                    </a>
               </td>
          </tr>
     );
}
