import DashboardTableRow from "../components/DashboardTableRow";

export default function DashboardPage() {
     return (
          <div className="container flex justify-center ml-10  flex-col">
               <div className="flex justify-between">
                    <h2 className="text-2xl font-extrabold contain my-4">
                         Food List
                    </h2>
                    <a
                         href="#"
                         className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
                    >
                         + Create new Food
                    </a>
               </div>
               <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                   <th scope="col" className="px-6 py-3">
                                        No
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Name
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Category
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Price
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Created By
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Main Ingredient
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Ingredients
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Actions
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              <DashboardTableRow />
                         </tbody>
                    </table>
               </div>
          </div>
     );
}
