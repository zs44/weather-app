import React from "react";
import axios from "axios";

import { Audio } from "react-loader-spinner";


export default function Weather(props) {
   function handelResponse(response) {
      alert(`the weather in ${props.city} is ${response.data.main.temp}`);
   }
 
    let apiKey = "dc913128ccaa43cdc1ca63d7d482beef";
    let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handelResponse);

   return (
       <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />
   );
}