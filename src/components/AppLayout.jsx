import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "./appLayout.css";

import Card1 from "./Card";

const Api = {
  key: "0f61bf8a42be4d3802e36f3756c787cc",
  base: "https://api.openweathermap.org/data/2.5/",
};

const AppLayout = () => {
  const [showdata, setShowdata] = useState(null);
  const [search, setSearch] = useState("gaya");
  // const [icon1, setIcon] = useState(true);
  const searchClicked = async () => {
    const url = `${Api.base}weather?q=${search}&units=metric&&APPID=${Api.key}`;
    const res = await fetch(url);
    const resJson = await res.json();
    setShowdata(resJson.main);
  };

  return (
    <>
      <div className="overitem">
        <Card
          bg="dark"
          className=" mb-3 p-2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <input
            type="search"
            placeholder="Search City..."
            className="m-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{
              width: "50vw",
              padding: "1rem",
              fontSize: "1.8rem",
              textAlign: "left",
            }}
          />
          <button type="submit" onClick={searchClicked}>
            Check
          </button>
        </Card>

        {!showdata ? (
          <h1>No data Found</h1>
        ) : (
          <div className="innerdiv">
            <div
              bg="dark"
              className="mb-3 p-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h4>City = {search}</h4>
                {/* <div>{icon1 ? <TiWeatherPartlySunny /> : <TiWeatherSunny/> }</div> */}
                <h4>Feels Like = {showdata.feels_like}</h4>
              </div>
              <div className="temp">{showdata.temp}*c</div>
            </div>
            <Card1 data={showdata} />
          </div>
        )}
      </div>
    </>
  );
};
export default AppLayout;
