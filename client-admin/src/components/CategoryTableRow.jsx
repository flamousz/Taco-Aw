export default function CategoryTableRow() {
     return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4">1</td>
               <td className="px-6 py-4">Quesadilla</td>
               <td className="px-6 py-4">23 feb 2022</td>
               <td className="px-6 py-4">23 feb 2022</td>
               <td className="px-6 py-4 ">
                    <a
                         href="#"
                         className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                         Delete
                    </a>
               </td>
          </tr>
     );
}
