import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../stores/actions/foodAction";

function Corosel() {
     let users = useSelector((state) => state.foodReducer.foods)
     let dispatch = useDispatch()

     useEffect(() => {
          dispatch(fetchFoods())
     }, [])

     return (
          <div className="relative z-10">
               <div className="main bg-white px-10 text-black">
                    <div className=" flex justify-center">
                         <div
                              className="carousel w-full"
                              style={{ width: 1000 }}
                         >
                              {users.map((user) => {
                                   return (
                                        <div
                                             key={user.id}
                                             id={"slide" + user.id}
                                             className="carousel-item relative w-full"
                                        >
                                             <img
                                                  src={user.imgUrl}
                                                  className="w-full"
                                             />
                                             <div className="carousel-caption hidden md:block absolute flex justify-center py-8 px-8 text-white">
                                                  <h1 className="text-2xl font-extrabold contain ">
                                                       {user.Category.name} ...
                                                  </h1>
                                             </div>
                                             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                  <a
                                                       href={
                                                            "#slide" +
                                                            (user.id -
                                                            1)
                                                       }
                                                       className="btn btn-circle"
                                                  >
                                                       ❮
                                                  </a>
                                                  <a
                                                       href={
                                                            "#slide" +
                                                            (user.id +
                                                            1)
                                                       }
                                                       className="btn btn-circle"
                                                  >
                                                       ❯
                                                  </a>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Corosel;
