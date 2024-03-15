import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city" id="weather-app-city">
          Bremen
        </h1>
        <p className="weather-app-details">
          <span id="time">Saturday, 13:02, </span>
          <span id="description">few clouds</span>
          <br />
          Humidity:
          <span className="values">
            <span id="humidity"> 84</span> %&nbsp;
          </span>
          Wind:
          <span className="values">
            <span id="wind-speed"> 4.12</span> km/h
          </span>
        </p>
      </div>
      <div>
        <span className="icon" id="icon">
          ☀️
        </span>
        <span className="weathertemp" id="weathertemp">
          7
        </span>
        <span class="weatherunit"> °C</span>
      </div>
    </div>
  );
}
