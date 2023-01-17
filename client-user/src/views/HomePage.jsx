import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const HomePage = () => {
     // state untuk menampung user
     const [users, setUsers] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          fetch("http://localhost:3006/items")
               .then((response) => {
                    if (!response.ok) {
                         throw new Error("fecthing data failed");
                    }

                    return response.json();
               })
               .then((data) => {
                    setUsers(data);
                    console.log(data);
               })
               .catch((err) => {
                    console.log(err);
               })
               .finally(() => {
                    setIsLoading(false);
               });
     }, []);

     return (
          <div className=" ">
               <div className=" relative z-10">
                    <div className="main bg-white px-10 text-black">
                         <div className="py-28">
                              <h2 className="text-2xl font-extrabold contain pb-8">
                                   FEATURED FAVORITES
                              </h2>
                              {!isLoading ? (
                                   <ul
                                        data-scroll-drag
                                        className="space-x-5 !list-none flex flex-nowrap overflow-x-auto mb-16 pl-1/24-screen xl:pl-1/10-screen scroll-snap-x md:scroll-snap-none hide-scrollbar cursor-grab"
                                   >
                                        {users.map((user) => {
                                             // return HTML (JSX)
                                             return (
                                                  <FoodCard user={user} />
                                             );
                                        })}
                                   </ul>
                              ) : (
                                   <h1>please wait</h1>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default HomePage;
