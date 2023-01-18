export default function DashboardPage() {
     return (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
               <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                         <tr>
                              <th scope="col" class="px-6 py-3">
                                   No
                              </th>
                              <th scope="col" class="px-6 py-3">
                                   Name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                   Position
                              </th>
                              <th scope="col" class="px-6 py-3">
                                   Status
                              </th>
                              <th scope="col" class="px-6 py-3">
                                   Action
                              </th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td class="px-6 py-4">1</td>
                              <th
                                   scope="row"
                                   class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   <img
                                        class="w-10 h-10 rounded-full"
                                        src="https://www.tacobell.co.id/wp-content/uploads/2020/09/2-Taco-Supreme.jpg"
                                        alt="Jese image"
                                   />
                                   <div class="pl-3">
                                        <div class="text-base font-semibold">
                                             Neil Sims
                                        </div>
                                        <div class="font-normal text-gray-500">
                                             neil.sims@flowbite.com
                                        </div>
                                   </div>
                              </th>
                              <td class="px-6 py-4">React Developer</td>
                              <td class="px-6 py-4">
                                   <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                                        Online
                                   </div>
                              </td>
                              <td class="px-6 py-4">
                                   <a
                                        href="#"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                   >
                                        Edit user
                                   </a>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     );
}
