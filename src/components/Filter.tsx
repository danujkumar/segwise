import { useState, useEffect } from "react";
import "../styles/navbar.css";
import FilterIcon from "../assets/Filter";
import Dropdown from "../assets/Dropdown";
import FilterBox from "./FilterBox";

function Filter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    show ? console.log("Dropdown to show") : console.log("Dropdown to hide");
  }, [show]);
  const [filters, setFilters] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div className="relative inline-block">
        <div className="patch">
          <button onClick={() => setShow(!show)}>
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
          </button>
        </div>
        {show && (
          <button onClick={() => setFilters(filters + 1)}>
            <div className="absolute z-10">
              <FilterBox />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Filter;
