import React from "react";
import WeatherTemprature from "./WeatherTemprature";
import Formatteddate from "./Formatteddate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <Formatteddate date={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6 d-flex new align-items-center">
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.info.iconurl}.png`}
          alt=" "
          />
          <WeatherTemprature Celsious={props.info.temperature} />
        </div>
        <div className="col-6 new">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
