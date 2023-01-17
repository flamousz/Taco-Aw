
export default function FoodCard({user}) {
    return (
        <li className="scroll-snap-align-center" key={user.id} >
        <div className="card w-96 bg-base-100 shadow-xl image-full  ">
             <figure>
                  <img
                       src={user.imgUrl}
                       alt="Shoes"
                  />
             </figure>
             <div className="card-body">
                  <h2 className="card-title">
                       {user.name}
                  </h2>
                  <div className="card-actions justify-end">
                       <button className="btn btn-primary">
                            Detail
                       </button>
                  </div>
             </div>
        </div>
   </li>
    )
}