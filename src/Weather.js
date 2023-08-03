import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handelResponse(response) {
    setWeatherData({
      ready: true,
      temprature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    console.log(response.data.main);
  }

  
  if (weatherData.ready){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.. "
                name=""
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li> Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix ">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.descripton}
                className="float-left"
              />
              <div className="float-left">
                <span className="temp">
                  {Math.round(weatherData.temprature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
else {
  const apiKey = "dc913128ccaa43cdc1ca63d7d482beef";
  let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
    return "Loading....";
  }
  
}
