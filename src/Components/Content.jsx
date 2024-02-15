import React from "react";
import "./Contentbox.css";
import cloud from "../assets/cloudSunny.png";
import rainseason from "../assets/rainy-removebg-preview.png";
import cloudy from "../assets/cloudy.png";
import MainCard from "./MainCard";
import "./searchBar.css";

const Content = (props) => {
  const image1 = document.getElementById("cloud-image");
  if (props.data.celcius >= Number(12) && props.data.celcius < Number(24)) {
    image1.setAttribute("src", cloud);
  } else if (
    props.data.celcius < Number(12) &&
    props.data.humidity > Number(60)
  ) {
    image1.setAttribute("src", cloudy);
  } else if (
    props.data.celcius > Number(25) &&
    props.data.humidity > Number(60)
  ) {
    image1.setAttribute("src", rainseason);
  }

  return (
    <div className="content-box">
      <div className="image-box">
        <img src={cloud} id="cloud-image"></img>
      </div>
      <div className="data">
        <div className="left">
          <ul>
            <li>
              <h1>{props.data.name}</h1>
            </li>
            <li>
              <h2>{Math.round(props.data.celcius)}°C</h2>
            </li>

            <li>
              <h1>Wind</h1>
            </li>
            <li>
              <h2>{Math.round(props.data.speed)} km/h</h2>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <h1>Humidity</h1>
            </li>
            <li>
              <h2>{props.data.humidity}%</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Content;
