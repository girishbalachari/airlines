import React from "react";
import Flight from "./Flight";

function Flights({ aeroData, filterOne, filterTwo, filterThree }) {
  let alliAeroplane = aeroData.slice();
  if (filterOne || filterTwo || filterThree) {
    alliAeroplane = aeroData.filter((airline) => {
      return airline.alliance === "OW"
        ? filterOne
        : airline.alliance === "ST"
        ? filterTwo
        : airline.alliance === "SA"
        ? filterThree
        : false;
    });
  }

  return (
    <div className="boxes">
      {alliAeroplane.map((airline) => (
        <Flight key={airline.code} data={airline} />
      ))}
    </div>
  );
}

export default Flights;
