import { Link } from "react-router-dom";

export default function FoodCard({ user }) {
     return (
          <li className="scroll-snap-align-center" key={user.id}>
               <div className="card w-96 bg-base-100 shadow-xl image-full  ">
                    <figure>
                         <img src={user.imgUrl} alt="Tacos" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title">{user.name}</h2>
                         <div className="card-actions justify-end">
                              <Link
                                   className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                   to={`/foods/${user.id}`}
                              >
                                   Detail
                              </Link>
                         </div>
                    </div>
               </div>
          </li>
     );
}
