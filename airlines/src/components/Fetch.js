import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import Flights from "./Flights";

const Fetch = () => {
  let [aeroData, setAeroData] = useState([]);
  let [filterOne, setFilterOne] = useState(false);
  let [filterTwo, setFilterTwo] = useState(false);
  let [filterThree, setFilterThree] = useState(false);

  useEffect(() => {
    fetchJsonp(
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      {
        jsonpCallback: "jsonp",
      }
    )
      .then((response) => response.json())
      .then((json) => {
        return setAeroData(json);
      })
      .catch((error) => console.log("Error Message : ", error));
  }, []);

  return (
    <>
      <div className="main">
        <h1 className="title">Airlines</h1>
        <h2 className="choice">Filter by Alliances</h2>
        <div className="mark">
          <input
            className="markinput"
            type="checkbox"
            id="OW"
            name="OW"
            onClick={() => setFilterOne(!filterOne)}
          />
          <label className="marklabel" htmlFor="OW">
            Oneworld
          </label>
          <input
            className="markinput"
            type="checkbox"
            id="ST"
            name="ST"
            onClick={() => setFilterTwo(!filterTwo)}
          />
          <label className="marklabel" htmlFor="ST">
            Sky Team
          </label>
          <input
            className="markinput"
            type="checkbox"
            id="SA"
            name="SA"
            onClick={() => setFilterThree(!filterThree)}
          />
          <label className="marklabel" htmlFor="SA">
            Star Alliance
          </label>
        </div>
      </div>
      <Flights
        aeroData={aeroData}
        filterOne={filterOne}
        filterTwo={filterTwo}
        filterThree={filterThree}
      />
    </>
  );
};

export default Fetch;
