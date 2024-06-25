import React from "react";
import cn from "classnames";
import weatherData from "../../weather.json";
import "./styles.css";

function WeatherGrid() {
  return (
    <ul className="cities-list">
      {weatherData.map(({ id, city, temperature, icon }) => (
        <li
          key={id}
          className={cn("cities-list__item", {
            "cities-list__item--medium-width": id === 1 || id === 9,
            "cities-list__item--full-width": id === 11,
          })}
          data-order={id}
        >
          <a href="#">
            {city}
            <span className="cities-list__weather-details">
              {temperature} <i className={`wi ${icon}`}></i>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default WeatherGrid;
