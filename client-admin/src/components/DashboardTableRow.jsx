export default function DashboardTableRow() {
     return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4">1</td>
               <td className="px-6 py-4">CHICKEN QUESADILLA</td>
               <td className="px-6 py-4">Quesadilla</td>
               <td className="px-6 py-4">Rp. 33000</td>
               <td className="px-6 py-4">darwin</td>
               <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
               >
                    <img
                         className="w-14 h-14 rounded-full"
                         src="https://www.tacobell.co.id/wp-content/uploads/2020/09/2-Taco-Supreme.jpg"
                         alt="Main Ingredient"
                    />
                    <div className="pl-3">
                         <div className="text-base font-semibold">flour</div>
                         <div className="font-normal text-gray-500">
                         CHICKEN QUESADILLA
                         </div>
                    </div>
               </th>
               
               <td className="px-6 py-4">
                    <a
                         href="#"
                         className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                         Ingredients
                    </a>
               </td>
               <td className="px-6 py-4 ">
                    <a
                         href="#"
                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1" 
                    >
                         Edit
                    </a>
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
