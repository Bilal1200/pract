import React from "react";

function Home() {
  return (
    <>
      <div className="container"></div>

      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div className="absolute flex justify-center inset-x-0 top-3">
            <h1 className="font-semibold dark:text-white text-6xl">Wellcome</h1>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center inset-x-0 bottom-0 transform -translate-y-1/2 ">
            <button className="btn">ShopNOw</button>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center inset-x-0 bottom-0 transform -translate-y-1/2 ">
            <button className="btn">ShopNOw</button>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center inset-x-0 bottom-0 transform -translate-y-1/2 ">
            <button className="btn">ShopNOw</button>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center inset-x-0 bottom-0 transform -translate-y-1/2 ">
            <button className="btn">ShopNOw</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
