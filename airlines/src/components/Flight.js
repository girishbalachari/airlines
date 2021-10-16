import React, { useState } from "react";

function Flight({ data }) {
  let [mouseOver, setMouseOver] = useState(false);
  if (mouseOver) {
    return (
      <div className="box box1" onMouseLeave={() => setMouseOver(false)}>
        <img
          className="planelogo"
          src={`https://www.kayak.com${data.logoURL}`}
          alt="logo"
        />
        <div>
          <p>{data.name}</p>
          <p className="result">
            {data.alliance === "ST"
              ? "Sky Team"
              : data.alliance === "OW"
              ? "Oneworld"
              : data.alliance === "SA"
              ? "Star Alliance"
              : "none"}
          </p>
          <p className="result">{data.phone}</p>
          <p className="result hlink">{data.site}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box" onMouseEnter={() => setMouseOver(true)}>
        <img
          className="planelogo"
          src={`https://www.kayak.com${data.logoURL}`}
          alt="logo"
        />
        {data.name}
      </div>
    );
  }
}

export default Flight;
