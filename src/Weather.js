import React from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
   const [city, setCity] = useState(props.city);
  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temprature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
     // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "dc913128ccaa43cdc1ca63d7d482beef";
    let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
   function handelCityChange(event) {
     setCity(event.target.value);
    // alert(city);
}
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.. "
                name=""
                autoFocus="on"
                className="form-control"
                onChange={handelCityChange}
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
        <WeatherInfo info={weatherData} />
        <WeatherForecast/>
      </div>
    );
  } else {
    
    search();
    
    return "Loading....";
  }
}
