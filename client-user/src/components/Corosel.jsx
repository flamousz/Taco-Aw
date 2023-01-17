function Corosel() {
     return (
          <div className="relative z-10">
               <div className="main bg-white px-10 text-black">
                    <div className=" flex justify-center">
                         <div
                              className="carousel w-full"
                              style={{ width: 1000 }}
                         >
                              <div
                                   id="slide1"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://www.quiznos.com/wp-content/uploads/2023/01/Veggie-Guac-Web-2000x0-c-default.jpg"
                                        className="w-full"
                                   />
                                   <div class="carousel-caption hidden md:block absolute flex justify-center py-8 px-8 text-white">
                                        <h1 className="text-2xl font-extrabold contain ">
                                             FEELING FRESH ...
                                        </h1>
                                   </div>
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide4"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide2"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide2"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://www.quiznos.com/wp-content/uploads/2023/01/Classic-Italian-Web-V2-2000x0-c-default.jpg"
                                        className="w-full"
                                   />
                                   <div class="carousel-caption hidden md:block absolute flex justify-center py-8 px-8 text-white">
                                        <h1 className="text-2xl font-extrabold contain ">
                                             FRESH AND JUICY ...
                                        </h1>
                                   </div>
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide1"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide3"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide3"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://www.quiznos.com/wp-content/uploads/2022/07/Chipotle-Steak-and-Cheddar-web-slider-2000x0-c-default.jpg"
                                        className="w-full"
                                   />
                                   <div class="carousel-caption hidden md:block absolute flex justify-center py-8 px-8 text-white">
                                        <h1 className="text-2xl font-extrabold contain ">
                                             YUM YUMM ...
                                        </h1>
                                   </div>
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide2"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide4"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide4"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://www.quiznos.com/wp-content/uploads/2021/12/SWChicken-WebSlider-1-2000x0-c-default.jpg"
                                        className="w-full"
                                   />
                                   <div class="carousel-caption hidden md:block absolute flex justify-center py-8 px-8 text-white">
                                        <h1 className="text-2xl font-extrabold contain ">
                                             MAKE IT A MEAL ...
                                        </h1>
                                   </div>
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                                        <a
                                             href="#slide3"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide1"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Corosel;
