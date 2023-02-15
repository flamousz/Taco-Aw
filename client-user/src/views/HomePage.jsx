import Corosel from "../components/Corosel";
import FoodCard from "../components/FoodCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../stores/actions/foodAction";

const HomePage = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.foodReducer.foods);
	const { isLoading } = useSelector((state) => state.loadingReducer);

	useEffect(() => {
		dispatch(fetchFoods())
	}, []);

	return (
		<>
			{isLoading ? (
				<div>loading</div>
			) : (
				<div>
					<Corosel />
					<div className=' relative z-10'>
						<div className='main bg-white px-10 text-black'>
							<div className='py-28'>
								<h2 className='text-2xl font-extrabold contain pb-8'>
									FEATURED FAVORITES
								</h2>

								<ul
									data-scroll-drag
									className='space-x-5 !list-none flex flex-nowrap overflow-x-auto mb-16 pl-1/24-screen xl:pl-1/10-screen scroll-snap-x md:scroll-snap-none hide-scrollbar cursor-grab'
								>
									{users.map((user) => {
										// return HTML (JSX)
										return <FoodCard key={user.id} user={user} />;
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
