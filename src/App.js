import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import Display from "./components/Display"
import { Button, TextField } from "@mui/material";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={3657f7beca6385ebdefaffbfe01cd99d}

function App() {
  const [city, setCity] = useState("Sricity");
  const [weatherData, setWeatherData] = useState();
  const API_KEY = "6d9bc642ae42c8d0c8607199def7b582";

  const getData = () => {
    if (city === "") {
      alert("Invalid city");
    } else {
      Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="App">
      <h1>Weather API</h1>
      <TextField
        type="text"
        variant="outlined"
        id="outlined-basic"
        label="City name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        style={{ width: "50em" }}
      />
      <br />
      <Button
        variant="contained"
        onClick={getData}
        style={{ marginTop: "5px" }}
      >
        Submit
      </Button>
      <br/>
      <br/>
      <br/>
      {weatherData && <Display weatherInfo = {weatherData} />}
    </div>
  );
}

export default App;
