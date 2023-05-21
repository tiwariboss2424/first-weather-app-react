import React from "react";
import "./card.css";
// import { Card } from "react-bootstrap";
//import { TiWeatherPartlySunny} from "react-icons";
import { TiWeatherPartlySunny } from "react-icons/fa";

const Card1 = ({ data }) => {
  return (
    <>
      <div bg="dark" className="cardalign shadow-lg mt-3">
        <div>
          <h2>Pressure: {data.pressure} Pa</h2>
          <h2>Humidity: {data.humidity} %</h2>
          <h2>visibility: {data.feels_like} *c</h2>
        </div>
      </div>
    </>
  );
};
export default Card1;
