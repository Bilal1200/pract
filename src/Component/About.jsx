import React from "react";

function About() {
  return (
    <div className="container-fluid dark:bg-white mb-5 pb-10">
      <div className="container ">
        <div className="flex justify-center   mb-5">
          <div>
            <h1 className="text-5xl mb-10 mt-10 font-semibold dark:text-black hover:bg-slate-600">
              About Us!
            </h1>
          </div>
        </div>
        <div className="flex mr-10  mb-5">
          <div className="w-full top-5">
            <img
              className="h-96 w-full object-cover"
              src="https://media.istockphoto.com/vectors/ecommerce-buying-vector-illustration-logo-in-flat-style-vector-id1133937441?k=20&m=1133937441&s=612x612&w=0&h=ivoew5ZA8soZVQ3pf8XphV6RmHygkeMWXS4Rd4z4Zcc="
            ></img>
          </div>
          <div className=" w-full top-5 dark:bg-white border-solid border-l-2 border-t-2 border-b-2 border-black">
            <h1 className="text-5xl font-semibold dark:text-black hover:bg-slate-600 p-10">
              About our Shop
            </h1>
            <p className="text-2xl dark:text-black  px-5 text-justify">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Nihil
              doloremque error id eaque dignissimos tempore porro amet excepturi
              quas, delectus mollitia ad consequatur nisi tenetur! Voluptatibus
              numquam ipsum qui voluptas.
            </p>
          </div>
          <div className="w-56">
            <img
              className="h-96 -ml-2 w-full"
              src="https://images.unsplash.com/photo-1581362716668-90cdec6b4882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW4lMjBibGFja3xlbnwwfHwwfHw%3D&w=1000&q=80"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button class="btn btn-outline dark:bg-transparent dark:text-black font-semibold border-black border-2 rounded-full">
          Read More
        </button>{" "}
      </div>
      <div className="flex flex-col w-full h-1">
        <div className="divider dark:bg-black bg-base-100"></div>
      </div>
    </div>
  );
}

export default About;
