import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityInput from "./Component/CityInput";
import CityWeather from "./Component/CityWeather";
// import React,{useState }from 'react';
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [res, setRes] = useState("");
  const fetchCityData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92eabeba83439c350c0a6edccffb4d76`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod == 200) {
          console.log(result);
          setRes(result);
        }
      });
  };
  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityData={fetchCityData}
      ></CityInput>
      { res!="" ?<CityWeather res={res}></CityWeather> : "" }
      
    </>
  );
};

export default App;
