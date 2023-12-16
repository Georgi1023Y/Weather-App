import React from 'react'
// Importing Link
import { Link } from "react-router-dom";

const Map = () => {
  return (
    <div className="flex bg-gradient-to-r from-cyan-500 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-row">
        <div className="mt-20">
          <nav className="bg-white bg-opacity-25 w-[100px] h-[600px] ml-10 rounded-3xl flex flex-col justify-start">
            <div className="mt-10  grid justify-items-center">
              <Link to="/welcome" className="mt-4 cursor-pointer">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5427/5427880.png?ga=GA1.1.785168996.1698608856&semt=ais"
                    alt="logo"
                    className="w-[60px] h-[60px] hover:transform hover:scale-110 transition-transform mx-auto block"
                  />
                </i>
              </Link>

              <Link to="/" className="mt-10 cursor-pointer">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png?ga=GA1.1.785168996.1698608856&semt=ais"
                    alt="weather-logo"
                    className="w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                  />
                </i>
                <p className="text-center mt-1">Weather</p>
              </Link>

              <Link to="/cities" className="mt-4 cursor-pointer">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1719/1719653.png?ga=GA1.1.785168996.1698608856&semt=ais"
                    alt="cities-logo"
                    className="w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                  />
                </i>
                <p className="text-center mt-1">Cities</p>
              </Link>

              <Link to="/map" className="mt-4 cursor-pointer">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/475/475438.png?ga=GA1.1.785168996.1698608856&semt=ais"
                    alt="map-logo"
                    className="w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                  />
                </i>
                <p className="text-center mt-1">Map</p>
              </Link>

              <Link to="/settings" className="mt-4 cursor-pointer">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/839/839395.png"
                    alt="settings"
                    className="w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                  />
                </i>
                <p className="text-center mt-1">Settings</p>
              </Link>
            </div>
          </nav>
        </div>

        {/* City Search Input */}
        <div className="flex flex-col mt-20">
          <div>
            <input
              type="search"
              placeholder="  Search for cities"
              className="ml-40 rounded-2xl w-96 h-10 bg-white bg-opacity-25 text-black"
            />
          </div>
          {/* Weather Map */}
          <div className="ml-40 bg-white bg-opacity-25 mt-10 w-96 h-96 rounded-lg">
            {/* Weather Map will be here */}
          </div>
        </div>
        {/* Data for 4 big cities next to the searched one - icon,city,hour,degree */}
        <div className="ml-40 mt-40 flex flex-row">
          {/* Orders all data in coumns */}
          <div className="flex flex-col gap-4">
            {/* First one */}
            <div className="bg-white bg-opacity-25 w-96 h-20 rounded-full flex flex-row gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6628/6628345.png?ga=GA1.1.785168996.1698608856&semt=ais"
                alt="weather-icon"
                className="my-5 ml-6 w-10 h-10 hover:transform hover:scale-110 transition-transform"
              />
              <div className="flex flex-col my-5 mr-40 hover:transform hover:scale-110 transition-transform">
                <p className="font-bold text-xl">Bilbao</p>
                <p className="text-base">10:23</p>
              </div>
              <p className="text-2xl my-5 hover:transform hover:scale-110 transition-transform">
                27°
              </p>
            </div>
            {/* Second one */}
            <div className="bg-white bg-opacity-25 w-96 h-20 rounded-full flex flex-row gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3211/3211040.png?ga=GA1.1.785168996.1698608856&semt=ais"
                alt="weather-icon"
                className="my-5 ml-6 w-10 h-10 hover:transform hover:scale-110 transition-transform"
              />
              <div className="flex flex-col my-5 mr-40 hover:transform hover:scale-110 transition-transform">
                <p className="font-bold text-xl">Bilbao</p>
                <p className="text-base">10:23</p>
              </div>
              <p className="text-2xl my-5 hover:transform hover:scale-110 transition-transform">
                27°
              </p>
            </div>
            {/* Third one */}
            <div className="bg-white bg-opacity-25 w-96 h-20 rounded-full flex flex-row gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3211/3211040.png?ga=GA1.1.785168996.1698608856&semt=ais"
                alt="weather-icon"
                className="my-5 ml-6 w-10 h-10 hover:transform hover:scale-110 transition-transform"
              />
              <div className="flex flex-col my-5 mr-40 hover:transform hover:scale-110 transition-transform">
                <p className="font-bold text-xl">Bilbao</p>
                <p className="text-base">10:23</p>
              </div>
              <p className="text-2xl my-5 hover:transform hover:scale-110 transition-transform">
                27°
              </p>
            </div>
            {/* Forth one */}
            <div className="bg-white bg-opacity-25 w-96 h-20 rounded-full flex flex-row gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6631/6631241.png?ga=GA1.1.785168996.1698608856&semt=ais"
                alt="weather-icon"
                className="my-5 ml-6 w-10 h-10 hover:transform hover:scale-110 transition-transform"
              />
              <div className="flex flex-col my-5 mr-40 hover:transform hover:scale-110 transition-transform">
                <p className="font-bold text-xl">Bilbao</p>
                <p className="text-base">10:23</p>
              </div>
              <p className="text-2xl my-5 hover:transform hover:scale-110 transition-transform">
                27°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map