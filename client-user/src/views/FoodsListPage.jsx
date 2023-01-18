import ListCard from "../components/ListCard";
import useFetch from "../hooks/useFetch";

const FoodsListPage = () => {
    const[items, isLoading] = useFetch("http://localhost:3006/items")

     return (
        <>
        {!isLoading ? (
            <div className="grid gap-4 grid-cols-3 bg-white mx-8 my-8 ">
              {items.map((item) => {
                return (
                    <ListCard key={item.id} item={item} />
                )
              })}
            </div>
        ) : (
            <h1>please wait</h1>
        )}
        
        </>
     );
};

export default FoodsListPage;
