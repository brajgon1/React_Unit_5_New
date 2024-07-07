import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>

      <table className="overivew-table">
        <tr>
          <td>Capitol: </td>
          <td>{currentDisplay.capital}</td>
        </tr>
        <tr>
          <td>Continent: </td>
          <td>{currentDisplay.continents}</td>
        </tr>
        <tr>
            <td>Timezone: </td>
            <td>{currentDisplay.timezones}</td>
        </tr>
        <tr>
            <td>Population: </td>
            <td>{currentDisplay.population}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
