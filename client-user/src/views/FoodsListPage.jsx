import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import TesLoading from "../components/TesLoading";
import { fetchFoods } from "../stores/actions/foodAction";

const FoodsListPage = () => {
     const items = useSelector((state) => state.foodReducer.foods);
     const { isLoading } = useSelector((state) => state.loadingReducer)
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchFoods());
     }, []);

     return (
          <>
               {
                    isLoading ? (
                         <TesLoading/>
                    ) : (
                         <div className="grid gap-4 grid-cols-3 bg-white mx-8 my-8 ">
                    {items.map((item) => {
                         return <ListCard key={item.id} item={item} />;
                    })}
               </div>
                    )
               }
               
          </>
     );
};

export default FoodsListPage;
