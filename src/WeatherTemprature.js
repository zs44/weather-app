import React from "react";
export default function WeatherTemprature(props) {
  
  
    return (
      <div className="WeatherTemprature">
        <span className="temp">{Math.round(props.Celsious)}</span>
        <span className="unit">
          °C 
          
        </span>
      </div>
    );
 
}
