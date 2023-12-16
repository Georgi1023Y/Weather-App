import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex bg-gradient-to-r from-cyan-500 min-h-screen">
      <div className="sm:hidden bg-white bg-opacity-25 md:ml-20 md:mt-40 md:w-80 md:h-80 lg:w-1/2 lg:m-20 xl:w-1/2 xl:m-20 rounded-3xl flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5904/5904053.png?ga=GA1.1.785168996.1698608856&semt=ais"
          alt="logo"
          className="lg:mx-auto xl:mx-auto hover:transform hover:scale-110 transition-transform"
        />
      </div>
      <div className="flex flex-col justify-center align-middle my-1/2 text-center mx-auto ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5427/5427880.png?ga=GA1.1.785168996.1698608856&semt=ais"
          alt="logo"
          className="sm:w-20 sm:h-20 md:w-16 w md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 mx-auto block hover:transform hover:scale-110 transition-transform"
        />
        <h1 className="xl:text-6xl text-5xl mt-4">Breeze</h1>
        <h2 className="xl:text-2xl text-lg mt-2 mb-8">Weather App</h2>
        <Link to="/">
          <button className=" bg-cyan-400 hover:bg-cyan-500 xl:px-5 xl:py-5 xl:text-xl px-3 py-3 rounded-full hover:transform hover:scale-110 transition-transform">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome