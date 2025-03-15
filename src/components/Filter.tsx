import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import FilterIcon from "../assets/Filter";
import Dropdown from "../assets/Dropdown";
import FilterBox from "./FilterBox";

function Filter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    show ? console.log("Dropdown to show") : console.log("Dropdown to hide");
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        <div className="patch">
          <div className="filter">
            <div className="icon">
              <FilterIcon />
            </div>

            <div
              className="filters"
              style={{
                font: "inter",
                fontSize: "16px",
                fontWeight: "400",
                color: "#4B5563",
              }}
            >
              Filters
            </div>
            <div className="dropdown">
              <Dropdown />
            </div>
          </div>
        </div>
      </button>
      {show && <FilterBox />}
    </>
  );
}

export default Filter;
