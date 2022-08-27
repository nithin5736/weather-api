import React from "react";
import Table from "react-bootstrap/Table";

const Display = ({ weatherInfo }) => {
//   console.log(weatherInfo);
  return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(in F)</th>
            <th>Pressure(in pa)</th>
            <th>Humidity(in F)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weatherInfo.name}</td>
            <td>{weatherInfo.main.temp}</td>
            <td>{weatherInfo.main.pressure}</td>
            <td>{weatherInfo.main.humidity}</td>
          </tr>
        </tbody>
      </Table>
  );
};

export default Display;
