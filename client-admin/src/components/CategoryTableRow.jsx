import { useDispatch } from "react-redux";
import { deleteCategory } from "../stores/actions/categoryAction";

export default function CategoryTableRow({
     categories,
     index,
     setHeaderNameToEdit,
     setModalstrue,
     editCategoryHandler,
}) {
     let dispatch = useDispatch();
     function deleteCategories(id) {
          dispatch(deleteCategory(id));
     }

     return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4">{index + 1}</td>
               <td className="px-6 py-4">{categories.name}</td>
               <td className="px-6 py-4">{categories.createdAt}</td>
               <td className="px-6 py-4">{categories.createdAt}</td>
               <td className="px-6 py-4 ">
                    <a
                         href="#"
                         onClick={() => {
                              setModalstrue();
                              setHeaderNameToEdit();
                              editCategoryHandler(categories);
                         }}
                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                    >
                         Edit
                    </a>
                    <a
                         href="#"
                         onClick={() => deleteCategories(categories.id)}
                         className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                         Delete
                    </a>
               </td>
          </tr>
     );
}
