import React from "react";
import { useState } from "react";
export default function WeatherTemprature(props) {
  const [unit, setUnit] = useState("Celsious");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("Farenheit");
  }
  function convertToCelsious(event) {
    event.preventDefault();
    setUnit("Celsious");
  }
  if (unit === "Celsious") {
    return (
      <div className="WeatherTemprature">
        <span className="temp">{Math.round(props.Celsious)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.Celsious * 9.5) + 32;
    return(
    <div className="WeatherTemprature">
      <span className="temp">{Math.round(farenheit)}</span>
      <span className="unit">
        <a href="/" onClick={convertToCelsious}>
          °C
        </a>{" "}
        °F
      </span>
    </div>);
  }
}
