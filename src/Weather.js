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
   //console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      coord: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconurl: response.data.condition.icon,
    });
  }
  function search() {
    const apiKey = "a54b3a926999b03f1ca9359f7o1d2teb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
   function handelCityChange(event) {
     setCity(event.target.value);
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
        <WeatherForecast coords={weatherData.coord} />
      </div>
    ); 
  } else {
    
    search();
    
    return "Loading....";
  }
}
