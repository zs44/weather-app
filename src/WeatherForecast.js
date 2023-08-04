import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
 
  let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  if (loaded) { 
 return (
   <div className="WeatherForecast">
     <div className="row">
       {forecast.map(function (dailyForecast, index) {
         if (index < 5) { 
         return (
           <div className="col" key={index}>
             <WeatherForecastDay data={dailyForecast} />
           </div>
         );
       }
       })
      }
      
     </div>
   </div>
 );


  
  }
  else {
      const apiKey = "a54b3a926999b03f1ca9359f7o1d2teb";
      let lon = props.coords.longitude;
      let lat = props.coords.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
      axios.get(apiUrl).then(handelResponse);
      return null;
  }
  
  
}
