import React from "react";

function About() {
  return (
    <div className="container-fluid dark:bg-white mb-5 pb-10">
      <div className="mb-5">
        <div className="">
          <h1 className="text-3xl text-center  mt-10 font-semibold dark:text-black hover:bg-slate-600">
            What Our CLient Syays
          </h1>
          <p className="text-2xl text-center dark:text-black  px-5 ">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut la
          </p>
        </div>
        <div className="carousel w-full mt-10">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://placeimg.com/800/200/arch"
              className="w-56 h-44 mt-5 mx-3 ml-14  z-10 rounded-2xl"
            />
            <div
              className="card w-full 
             bg-primary text-primary-content"
            >
              <div className="card-body dark:bg-white border-black border-2   rounded">
                <h2 className="card-title   mt-5 dark:text-black">
                  Card title!
                </h2>
                <p className="   dark:text-black">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://placeimg.com/800/200/arch"
              className="w-56 h-44 mt-5 mx-3 ml-14  z-10 rounded-2xl"
            />
            <div
              className="card w-full 
             bg-primary text-primary-content"
            >
              <div className="card-body dark:bg-white border-black border-2   rounded">
                <h2 className="card-title  mt-5 dark:text-black">
                  Card title!
                </h2>
                <p className="  dark:text-black">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://placeimg.com/800/200/arch"
              className="w-56 h-44 mt-5 mx-3 ml-14  z-10 rounded-2xl"
            />
            <div
              className="card w-full 
             bg-primary text-primary-content"
            >
              <div className="card-body dark:bg-white border-black border-2   rounded">
                <h2 className="card-title   mt-5 dark:text-black">
                  Card title!
                </h2>
                <p className="   dark:text-black">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://placeimg.com/800/200/arch"
              className="w-56 h-44 mt-5 mx-3 ml-14  z-10 rounded-2xl"
            />
            <div
              className="card w-full 
             bg-primary text-primary-content"
            >
              <div className="card-body dark:bg-white border-black border-2   rounded">
                <h2 className="card-title  mt-5 dark:text-black">
                  Card title!
                </h2>
                <p className="   dark:text-black">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
