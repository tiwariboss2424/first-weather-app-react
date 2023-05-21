import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { snow } from "./img/snow.jpg";
import { sunny } from "./img/sunny.jpg";
import { supersunny } from "./img/supersunny.jpg";
import Card1 from "./Card";

import {
  WiDayRainWind,
  WiDaySunny,
  WiDaySnowWind,
  WiCloudy
} from "react-icons/fa";

const Api = {
  key: "0f61bf8a42be4d3802e36f3756c787cc",
  base: "https://api.openweathermap.org/data/2.5/"
};
const AppLayout = () => {
  const [search, setSearch] = useState("gaya");
  const [showdata, setShowdata] = useState(null);

  const searchClicked = () => {
    fetch(`${Api.base}weather?q=${search}&units=metric&&APPID=${Api.key}`)
      .then((res) => res.json())
      .then((data) => setShowdata(data.main));
  };

  return (
    <>
      <Container>
        <Card bg="dark" className="shadow-lg mt-2">
          <Card.Body>
            <Form>
              <Form.Group
                style={{
                  display: "flex",
                  color: "white",
                  fontSize: "2rem",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
                className="mb-3"
              >
                l{" "}
                <input
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    background: "transparent",
                    name: "search",
                    width: "30vw",
                    textAlign: "left",
                    outline: "none",
                    borderBottom: "4px solid cyan"
                  }}
                  placeholder="Search city..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  onClick={searchClicked}
                  className="p-2"
                  style={{ fontSize: "2rem" }}
                >
                  Check
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card bg="dark" className="shadow-lg mt-3">
          <Card.Header
            style={{
              display: "flex",
              alinItems: "center",
              justifyContent: "space-around"
            }}
          >
            <span style={{ display: "block", gap: "0.3rem", color: "white" }}>
              <p className="m-2">{search} </p>
              <span style={{ fontSize: "3rem" }}>{<WiDaySnowWind />} </span>
              <p className="m-2">
                {showdata.temp_min}*c {" , "} {showdata.temp_max}*c
              </p>
            </span>
            <span
              className="mt-auto mb-auto"
              style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bolder"
              }}
            >
              {showdata.temp}*C
            </span>
          </Card.Header>
        </Card>

        <Card bg="dark" className="shadow-lg mt-3">
          <Card.Header
            style={{
              display: "flex",
              alinItems: "center",
              justifyContent: "space-around"
            }}
          >
            <Card1 data={showdata} />
          </Card.Header>
        </Card>
      </Container>
    </>
  );
};

export default AppLayout;
