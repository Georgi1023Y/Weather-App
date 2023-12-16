import React, { useState } from "react";
// Importing Link
import { Link } from "react-router-dom";

const SlidingButton = () => {
  const [isChecked, setisChecked] = useState(false);
  const [isChosen, setChosen] = useState(false);

  const handleClick = () => {
    setChosen(!isChosen);
  };

  const handleToggle = () => {
    setisChecked(!isChosen);
  };

  return (
    <div>
      <button
        className={`rounded-full ${isChecked ? "bg-sky-500" : "bg-slate-400"}`}
      >
        <label className={`h-8 w-16 cursor-pointer my-auto block mt-2 ml-1`}>
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`slider h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
              isChecked ? "translate-x-8 mr-1" : "translate-x-0"
            }`}
          ></div>
        </label>
      </button>
    </div>
  );
};

const Settings = () => {
  return (
    <div className="flex bg-gradient-to-r from-cyan-500 min-h-screen">
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
        {/* Search in settings */}
        <div className="flex flex-col mt-10 mb-10">
          <div>
            <input
              type="search"
              placeholder="  Search for cities"
              className="ml-10 rounded-2xl w-96 h-10 bg-white bg-opacity-25 text-black"
            />
          </div>
          <div className="ml-10 my-8">
            <h1 className="text-xl font-semibold">Units</h1>
          </div>
          {/* Settings */}
          <div className="flex flex-col ml-10 bg-white bg-opacity-25 rounded-xl xl:w-7/12 h-5/6">
            <div className="my-5 mx-10">
              <p className="text-base">TEMPERATURE</p>
            </div>
            {/* Temperature Settings */}
            <div className="xl:py-2 xl:gap-8 xl:w-48 xl:ml-10 flex flex-row bg-teal-300 bg-opacity rounded-2xl">
              <button
                id="button1"
                className={` bg-teal-300 hover:bg-sky-400 xl:py-1 xl:px-1 rounded-full`}
                onClick={() => handleClick()}
              >
                Celsius
              </button>
              <button
                id="button2"
                className=" bg-teal-300 hover:bg-sky-400 xl:py-1 xl:px-1 rounded-full"
              >
                Fahrenheit
              </button>
            </div>
            {/* Wind Speed Settings */}
            <div className="my-5 mx-10">
              <p className="text-base">WIND SPEED</p>
            </div>
            <div className="flex flex-row ml-5 mr-8 bg-teal-300 bg-opacity rounded-xl">
              <button
                id="button1"
                className=" ml-4 mr-1 my-1 bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-32 rounded-xl focus:outline-none focus:shadow-outline"
              >
                km/h
              </button>
              <button
                id="button2"
                className=" mx-1 my-1 bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-32 rounded-xl focus:outline-none focus:shadow-outline"
              >
                m/s
              </button>
              <button
                id="button3"
                className=" ml-1 mr-11 my-1 bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-32 rounded-xl focus:outline-none focus:shadow-outline "
              >
                Knots
              </button>
            </div>
            {/* Pressure */}
            <div className="my-5 mx-10">
              <p className="text-base">PRESSURE</p>
            </div>
            <div className="flex flex-row mx-5 bg-teal-300 bg-opacity rounded-xl">
              <button
                id="button1"
                className="mr-1 ml-8 my-1 bg-teal-300 hover:bg-sky-600 text-black font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
              >
                hPa
              </button>
              <button
                id="button2"
                className="mx-1 my-1 bg-teal-300 hover:bg-sky-600 text-black font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Inches
              </button>
              <button
                id="button3"
                className="mx-1 my-1 bg-teal-300 hover:bg-sky-600 text-black font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
              >
                kPa
              </button>
              <button
                id="button3"
                className="ml-1 mr-8 my-1 bg-teal-300 hover:bg-sky-600 text-black font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
              >
                mm
              </button>
            </div>
            {/* Precipitation */}
            <div className="my-5 mx-10">
              <p className="text-base">PRECIPITATION</p>
            </div>
            {/* Temperature Settings */}
            <div className="flex flex-row ml-4 mr-5 bg-teal-300 bg-opacity rounded-xl">
              <button
                id="button1"
                className=" ml-5 mr-1 bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-48  my-1 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Milimeters
              </button>
              <button
                id="button2"
                className=" bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-48 my-1 mr-5 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Inches
              </button>
            </div>
            {/* Distance */}
            <div className="my-5 mx-10">
              <p className="text-base">DISTANCE</p>
            </div>
            {/* Temperature Settings */}
            <div className="flex flex-row ml-4 mr-5 bg-teal-300 bg-opacity rounded-xl mb-4">
              <button
                id="button1"
                className=" ml-5 mr-1 bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-48  my-1 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Kilometers
              </button>
              <button
                id="button2"
                className=" bg-teal-300 hover:bg-sky-400 text-black font-bold py-2 px-48 my-1 mr-5 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Miles
              </button>
            </div>
          </div>
          {/* Notifications */}
          <div className="flex flex-col">
            <div className="ml-10 my-8">
              <h1 className="text-xl font-semibold">Notifications</h1>
            </div>
            <div className="flex flex-row ml-10 bg-white bg-opacity-25 rounded-xl w-11/12 h-5/6">
              <div className="flex flex-col mx-6 my-6">
                <h2 className="mxtext-lg font-semibold">Notifications</h2>
                <p className="text-base">Be aware of the weather</p>
              </div>
              {/* Notifications Button */}
              <div className="my-6 ml-auto mr-6">
                <SlidingButton />
              </div>
            </div>
            {/* General */}
            <div className="flex flex-col rounded-full">
              <div className="ml-10 my-8">
                <h1 className="text-xl font-semibold">General</h1>
              </div>
              <div className="flex flex-col ml-10 bg-white bg-opacity-25 rounded-xl w-11/12 h-5/6">
                <div className="flex flex-row">
                  <div className="flex flex-col mx-6 my-6">
                    <h2 className="mxtext-lg font-semibold">12-Hour time</h2>
                  </div>
                  {/* Notifications Button */}
                  <div className="my-6 ml-auto mr-6">
                    <SlidingButton />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col mx-6 my-6">
                    <h2 className="text-lg font-semibold">Location</h2>
                    <p className="text-base">Get weather of your location</p>
                  </div>
                  {/* Notifications Button */}
                  <div className="my-6 ml-auto mr-6">
                    <SlidingButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-44 bg-teal-300 bg-opacity-25 w-64 h-80 rounded-2xl mr-20">
            <h1 className="text-3xl font-semibold mx-4 my-4">Advanced</h1>
            <div className="border-b border-gray-500 my-4 mx-6"></div>
            <div className="flex flex-col mx-4 my-4">
              <h2 className="text-xl font-semibold">Get new experience</h2>
              <ul className="list-disc gap-4 text-sm mx-4 my-2">
                <li>Ad free</li>
                <li>Health activities overview</li>
                <li>Severe weather notifications</li>
              </ul>
              <div className="my-6">
                <button className="btn rounded-full bg-gradient-to-r px-2 py-2 from-cyan-500 mx-auto block to-blue-500">
                  <h2 className="text-sm px-2 py-1">
                    <span className="text-4xl font-semibold">$5.99</span>/month
                  </h2>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-teal-300 bg-opacity-25 w-64 h-80 rounded-2xl mr-6">
            <h1 className="text-lg font-bold mx-4 my-4">
              Never forget your umbrella!
            </h1>
            <div className="border-b border-gray-500 my-4 mx-6"></div>
            <div className="flex flex-col mx-4 my-2">
              <h2 className="text-sm">
                Sign up for our daily weather newsletter personalized just for
                you.
              </h2>
              <div className="my-6">
                <button className="btn rounded-full bg-gradient-to-r px-1 py-2 from-cyan-500 mx-auto block to-blue-500">
                  <h2 className="text-sm px-2 py-2">Sign Up</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
