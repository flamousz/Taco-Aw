const DetailPage = () => {
     return (
        <div className=" py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 bg-white">

          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
               <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12 text-black">
                    <h1 className="text-2xl font-extrabold mb-5">
                         Team management mobile application
                    </h1>
                    <p className="p-large mb-8">
                         Start getting things done together with your team based
                         on Pavo's revolutionary team management features
                    </p>

               </div>
               <div className="xl:text-right">
                    <img
                         className="inline"
                         src="https://www.tacobell.co.id/wp-content/uploads/2020/09/Crunchwrap-Supreme.jpg"
                         alt="alternative"
                    />
               </div>
          </div>
        </div>
     );
};

export default DetailPage;
