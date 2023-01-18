import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

const DetailPage = () => {
    const {id} = useParams()
    const [food, setFood] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3006/items/${id}`)
            .then((res) => res.json())
            .then((data) => setFood(data))
            .catch((err) => console.log(err))
    }, [id])

     return (
          <div className=" py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 bg-white">
               <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12 text-black">
                         <h1 className="text-2xl font-extrabold mb-5">
                              {food.name}
                         </h1>
                         <p className="p-large mb-8">
                              {food.description}
                         </p>
                    </div>
                    <div className="xl:text-right">
                         <img
                              className="inline"
                              src={food.imgUrl}
                              alt="taco picture"
                         />
                    </div>
               </div>
          </div>
     );
};

export default DetailPage;
