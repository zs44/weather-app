import React from "react";
import WeatherIcon from "./WeatherIcon";

import Formatteddate from "./Formatteddate";
export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <Formatteddate date={props.info.date} />
        </li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix ">
            <div className="float-left">
              <WeatherIcon
                code={props.info.icon}
                size={52}
              />
            </div>
            <div className="float-left">
              <span className="temp">{Math.round(props.info.temprature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}