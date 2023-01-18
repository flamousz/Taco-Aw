import { Link } from "react-router-dom";

const ListCard = ({ item }) => {
     return (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
               <a href="#">
                    <img className="rounded-t-lg" src={item.imgUrl} alt="" />
               </a>
               <div className="p-5">
                    <a href="#">
                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {item.name}
                         </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         {item.Category.name}
                    </p>
                    <Link
                         className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                         to={`/foods/${item.id}`}
                    >
                         Detail
                    </Link>
               </div>
          </div>
     );
};

export default ListCard;
