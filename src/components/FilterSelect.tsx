import { useState } from "react";
import SideView from "../assets/SideView";
import Dropdown from "../assets/Dropdown";
import TextField from "@mui/material/TextField";
import Delete from "../assets/Delete";

function FilterSelect() {
  const [del, setDel] = useState("#999");
  return (
    <div
      className="w-80 m-2 rounded-lg border-1 border-gray-200"
      style={{
        padding: "0.5px",
        height: "fit-content",
        backgroundColor: "white",
      }}
    >
      {/* <button onClick={() => setBox(!box)}> */}
      <div
        className="w-75.5 m-2 h-10 flex items-center rounded-md"
        style={{ background: "white" }}
      >
        <div className="flex justify-center items-center space-x-1 m-2">
          <span
            style={{
              font: "inter",
              fontSize: "16px",
              fontWeight: "400",
              color: "#4B5563",
              position: "relative",
              top: "-1px",
            }}
          >
            Metrics
          </span>
          <SideView />
        </div>
        <div className="flex justify-center items-center space-x-1 m-2 rounded-md hover:bg-gray-200 transition pl-1.5 pr-1.5 p-1">
          <span
            style={{
              font: "inter",
              fontSize: "16px",
              fontWeight: "600",
              color: "#4B5563",
              position: "relative",
              top: "-1px",
              marginRight: "0.5rem",
            }}
          >
            Spends
          </span>
          <Dropdown />
        </div>
        <div
          className="rounded-md border-1 border-gray-200 hover:border-gray-400"
          onMouseEnter={() => {
            setDel("red");
          }}
          onMouseLeave={() => {
            setDel("#999");
          }}
        >
          <Delete color={del} />
        </div>
      </div>
      <div
        className="w-75.5 m-2 h-10 flex items-center rounded-md"
        style={{ background: "white" }}
      >
        <div className="flex justify-center items-center space-x-1 ml-0.5 m-2 rounded-md hover:bg-gray-200 transition pl-1.5 pr-1.5 p-1">
          <span
            style={{
              font: "inter",
              fontSize: "16px",
              fontWeight: "600",
              color: "#4B5563",
              position: "relative",
              top: "-1px",
              marginRight: "0.5rem",
            }}
          >
            Equals
          </span>
          <Dropdown />
        </div>
        <div className="flex justify-center items-center space-x-1 m-2">
          <span
            style={{
              font: "inter",
              fontSize: "16px",
              fontWeight: "400",
              color: "#4B5563",
              position: "relative",
              top: "-1px",
            }}
          >
            <TextField
              className="w-full"
              variant="outlined"
              placeholder="Search"
              size="small"
              sx={{
                height: "fit-content",
                paddingTop: "1.5px",
                margin: "0px",
                backgroundColor: "transparent",
                "& fieldset": { borderColor: "#C0E656" },
                
                "& .MuiOutlinedInput-root": {
      "&:hover fieldset": { borderColor: "#C0E656" }, // Green border on hover
    },
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterSelect;
