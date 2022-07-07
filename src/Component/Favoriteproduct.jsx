import React from "react";

function Favoriteproduct() {
  return (
    <div className="container-fluid dark:bg-white mb-5 pb-10">
      <div className="container ">
         
        <div className="flex mr-10  mb-5">
          <div className="w-full top-5">
            <img
              className="h-96 w-full object-cover"
              src="https://media.istockphoto.com/vectors/ecommerce-buying-vector-illustration-logo-in-flat-style-vector-id1133937441?k=20&m=1133937441&s=612x612&w=0&h=ivoew5ZA8soZVQ3pf8XphV6RmHygkeMWXS4Rd4z4Zcc="
            ></img>
          </div>
          <div className=" w-full top-5 dark:bg-black border-solid  border border-black">
            <h3 className="text-3xl font-semibold dark:text-white dark:bg-slate-600 p-10">
             Our Most Saled Products in week
            </h3>
            <p className="text-2xl dark:text-white  px-5 text-justify">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Nihil
              doloremque error id eaque dignissimos tempore porro amet excepturi
              quas, delectus mollitia ad consequatur nisi tenetur! Voluptatibus
              numquam ipsum qui voluptas.
            </p>
            <button class="btn btn-outline dark:bg-white mt-5 text-center ml-5 dark:text-black font-semibold border-black border-2 rounded-full">
         Shop Now
        </button>{" "}
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

export default Favoriteproduct;
