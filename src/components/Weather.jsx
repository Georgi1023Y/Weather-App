import React, { useState, useEffect } from "react";
// Importing Link
import { Link } from "react-router-dom";
// Importing the weather data
import { weatherData } from "../data";

const Weather = () => {
  // All variables that I fetched from the API and I will use in my app
  const [cityName, setCityName] = useState("");
  const [region, setRegion] = useState("");
  const [temp_c, setTemp_C] = useState("");
  const [uv, setUv] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "efc0889489mshf838c711146e8dap11d8f7jsnd4d7439eb583",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  // Fetches the weather data from API
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch weather data. Status: ${response.status}`
        );
      }

      const result = await response.json(); // Parse JSON response

      if (result && result.location && result.location.name) {
        // Fetching and getting hold of the data I will use in my web app
        const region = result.location.region;
        const temperature_c = result.current.temp_c;
        const uv = result.current.uv;
        const windSpeed = result.current.wind_kph;
        const humidity = result.current.humidity;
        const icon = result.current.condition.icon;
        const text = result.current.condition.text;
        console.log(result);

        setIcon(icon);
        setText(text);
        setHumidity(humidity);
        setWindSpeed(windSpeed);
        setUv(uv);
        setRegion(region);
        setTemp_C(temperature_c);
      } else {
        throw new Error(
          "Invalid response format. Missing expected properties."
        );
      }
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-sky-400 min-h-screen bg-cover">
        <div className="flex flex-row">
          <div className="mt-20">
            <nav className="bg-white bg-opacity-25 w-[100px] h-[600px] ml-10 rounded-3xl flex flex-col justify-start sm:w-[80px] sm:h-[600px]  md:w-[80px] md:h-[600px]">
              <div className="mt-10  sm:mt-0 grid justify-items-center">
                <Link to="/welcome" className="mt-4 cursor-pointer">
                  <i>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5427/5427880.png?ga=GA1.1.785168996.1698608856&semt=ais"
                      alt="logo"
                      className="sm:w-[40px] sm:h-[40px] w-[60px] h-[60px] hover:transform hover:scale-110 transition-transform mx-auto block"
                    />
                  </i>
                </Link>

                <Link to="/" className="mt-10 cursor-pointer">
                  <i>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png?ga=GA1.1.785168996.1698608856&semt=ais"
                      alt="weather-logo"
                      className="sm:w-[30px] sm:h-[30px] w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                    />
                  </i>
                  <p className="text-center sm:text-sm mt-1">Weather</p>
                </Link>

                <Link to="/cities" className="mt-4 cursor-pointer">
                  <i>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1719/1719653.png?ga=GA1.1.785168996.1698608856&semt=ais"
                      alt="cities-logo"
                      className="sm:w-[30px] sm:h-[30px] w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                    />
                  </i>
                  <p className="text-center sm:text-sm mt-1">Cities</p>
                </Link>

                <Link to="/map" className="mt-4 cursor-pointer">
                  <i>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/475/475438.png?ga=GA1.1.785168996.1698608856&semt=ais"
                      alt="map-logo"
                      className="sm:w-[30px] sm:h-[30px] w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                    />
                  </i>
                  <p className="text-center sm:text-sm mt-1">Map</p>
                </Link>

                <Link to="/settings" className="mt-4 cursor-pointer">
                  <i>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/839/839395.png"
                      alt="settings"
                      className="sm:w-[30px] sm:h-[30px] w-[40px] h-[40px] hover:transform hover:scale-110 transition-transform mx-auto block"
                    />
                  </i>
                  <p className="text-center sm:text-sm mt-1">Settings</p>
                </Link>
              </div>
            </nav>
          </div>

          <div className=" flex justify-center flex-col rounded-lg mt-10">
            {/* Section one with input for city */}
            <div className="flex flex-row">
              <input
                type="search"
                placeholder="Search for city"
                className="sm:ml-5 sm:w-48 sm:h-8 md:mt-10 md:ml-12 md:w-96 md:h-10 lg:mt-10 lg:ml-20 rounded-2xl lg:w-96 lg:h-10 bg-white bg-opacity-25 text-black pl-4"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <button className="ml-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/751/751463.png?ga=GA1.1.785168996.1698608856&semt=ais"
                  alt="search"
                  className="sm:h-6 sm:w-6 sm:mt-10 sm:mr-28 md:mt-10 lg:mt-10 w-8 h-8 hover:transform hover:scale-110 transition-transform"
                  onClick={() => fetchData()}
                />
              </button>
            </div>
            {/* Section 2 with city name and average temp */}
            <div className="flex flex-row">
              <div className="sm:hidden flex flex-col">
                <div className="md:mx-12 grid grid-cols-6 gap-4 mx-20 my-8">
                  <div className="col-start-1 col-span-3">
                    {cityName !== "" ? (
                      <>
                        <h1 className="md:text-xl text-2xl text-black my-1 cursor-pointer">
                          City: {cityName}
                        </h1>
                        <h3 className="text-xl text-black mt-2 mb-6 cursor-pointer">
                          Region: {region}
                        </h3>
                        <h1 className="text-5xl text-black">
                          <span className="font-bold cursor-pointer">{`${temp_c} °`}</span>
                        </h1>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5427/5427880.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="logo"
                          className="md:hidden w-10 h-10 my-8"
                        />
                      </>
                    ) : (
                      <div className="flex flex-row align-middle">
                        <div>
                          <h1 className="text-2xl text-black my-1 cursor-pointer">
                            City: Add city
                          </h1>
                          <h3 className="text-xl text-black mt-2 mb-6 cursor-pointer">
                            Region: Region for the added city will appear here
                          </h3>
                          <h1 className="text-5xl text-black">
                            <span className="font-bold cursor-pointer">0°</span>
                          </h1>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
                            alt="sun-logo"
                            className="ml-48 cursor-pointer hover:transform hover:scale-110 transition-transform"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div>
                  {cityName !== "" ? (
                    <>
                      <div className="sm:pt-1 sm:mt-4 sm:ml-5 sm:w-36 sm:h-2/3 sm:rounded-2xl md:ml-20 md:h-80 md:w-56 lg:ml-52 lg:w-80 lg:h-96 lg:mt-10  xl:w-80 xl:h-96 bg-white bg-opacity-25 rounded-lg mr-96 mt-12 mb-10">
                        <div>
                          <h3 className="sm:text-sm sm:mt-2 text-center font-semibold lg:text-xl lg:mx-6 lg:pt-6">
                            Weather Forecast for {cityName}
                          </h3>
                        </div>
                        <div className="sm:flex sm:flex-col sm:gap-2 md:flex md:flex-row md:my-4 md:mx-4 lg:flex lg:flex-row lg:items-center lg:ml-6 lg:mt-6 lg:gap-4">
                          <p className="sm:text-sm sm:my-4 sm:text-center lg:text-base">
                            Today
                          </p>
                          <img
                            src={icon}
                            alt="appropriate-weather-icon"
                            className="sm:mx-auto sm:block sm:w-15 sm:h-15 lg:w-16 lg:h-16 hover:transform hover:scale-110 transition-transform"
                          />
                          <p className="sm:text-center text-base">{text}</p>
                          <p className="sm:text-center md:ml-2">
                            <span>{temp_c}°</span>
                          </p>
                        </div>
                        <div className="md:ml-2 md:my-2">
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Temperature: {temp_c}°
                          </h3>
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Humidity: {humidity}%
                          </h3>
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Wind Speed: {windSpeed} km/h
                          </h3>
                          <h3 className="sm:pb-4 sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            UV Index: {uv}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="sm:pt-1 sm:mt-4 sm:ml-5 sm:w-36 sm:h-2/3 sm:rounded-2xl md:ml-20 md:h-80 md:w-56 lg:ml-52 lg:w-80 lg:h-96 lg:mt-10  xl:w-80 xl:h-96 bg-white bg-opacity-25 rounded-lg mr-96 mt-12 mb-10">
                        <div>
                          <h3 className="sm:text-sm sm:mt-2 sm:text-center md:mt-2 font-semibold text-center lg:text-xl lg:mx-6 lg:pt-6">
                            Weather Forecast for {cityName}
                          </h3>
                        </div>
                        <div className="md:ml-2 md:my-2">
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Temperature: 0°
                          </h3>
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Humidity: 0 %
                          </h3>
                          <h3 className="sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            Wind Speed: 0 km/h
                          </h3>
                          <h3 className="sm:pb-4 sm:text-sm sm:my-4 sm:text-start sm:mx-2 lg:ml-6 lg:mt-6 lg:text-base">
                            UV Index: 0
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white bg-opacity-25 rounded-lg lg:ml-16 md:w-6/12 md:mb-10 md:ml-14 md:py-4lg:w-7/12 xl:w-2/3 xl:ml-16 lg:my-20">
              <div>
                <h3 className="sm:text-xl sm:text-center sm:my-2 sm:mx-2 md:px-2 md:py-2 lg:text-xl text-black lg:my-4 lg:ml-4 col-start-1 col-end-1">
                  AIR CONDITIONS
                </h3>
              </div>

              <div className="sm:flex sm:flex-col sm:mt-2 grid col-span-3 lg:my-10 lg:ml-4">
                {cityName !== "" ? (
                  <>
                    <div className="col-start-1 col-end-1 mb-8">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="sm:mx-2 sm:w-8 sm:h-8 md:w-12 md:h-12 md:mr-4 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:flex sm:flex-row sm:gap-1 lg:flex lg:flex-col">
                          <h3 className="sm:text-base lg:text-base text-black lg:ml-4">
                            Temperature:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold lg:ml-4">
                            {temp_c}°
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-3">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2511/2511568.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:gap-1  sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-sm lg:text-base text-black lg:ml-4">
                            Wind Speed:
                          </h3>
                          <p className="sm:text-sm lg:text-2xl text-black font-bold lg:ml-4">
                            {windSpeed} km/h
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-1 col-end-1">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2408/2408569.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-base lg:text-base text-black">
                            Humidity:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold">
                            {humidity}%
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-3">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/10636/10636310.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:gap-1  sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-base lg:text-base text-black lg:ml-4">
                            UV Index:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold lg:ml-4">
                            {uv}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-start-1 col-end-1 mb-8">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:flex sm:flex-row sm:gap-1 lg:flex lg:flex-col">
                          <h3 className="sm:text-base lg:text-base text-black lg:ml-4">
                            Temperature:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold lg:ml-4">
                            0°
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-3">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2511/2511568.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:gap-1  sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-sm lg:text-base text-black lg:ml-4">
                            Wind Speed:
                          </h3>
                          <p className="sm:text-sm lg:text-2xl text-black font-bold lg:ml-4">
                            0 km/h
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-1 col-end-1">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2408/2408569.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-base lg:text-base text-black">
                            Humidity:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold">
                            0 %
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-3">
                      <div className="flex flex-row">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/10636/10636310.png?ga=GA1.1.785168996.1698608856&semt=ais"
                          alt="real-feel"
                          className="md:w-12 md:h-12 md:mr-4 sm:mx-2 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:transform hover:scale-110 transition-transform"
                        />
                        <div className="sm:gap-1  sm:flex sm:flex-row lg:flex lg:flex-col lg:ml-4">
                          <h3 className="sm:text-base lg:text-base text-black lg:ml-4">
                            UV Index:
                          </h3>
                          <h3 className="sm:text-base lg:text-2xl text-black font-bold lg:ml-4">
                            0
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
