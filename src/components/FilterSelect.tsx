import React from 'react'
import SideView from '../assets/SideView'
import Dropdown from '../assets/Dropdown'
import SearchBox from './Inner/SearchBox'
import TextField from '@mui/material/TextField'

function FilterSelect() {
  return (
    <div
        className="w-fit m-1 rounded-l-lg"
        style={{
          padding: "0.5px",
          height: "fit-content",
          backgroundColor: "white",
        }}
      >
        {/* <button onClick={() => setBox(!box)}> */}
          <div
            className="w-80 m-2 h-10 flex items-center rounded-md"
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
            <div className="flex justify-center items-center space-x-1 m-2">
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
          </div>
          <div
            className="w-80 m-2 h-10 flex items-center rounded-md"
            style={{ background: "white" }}
          >
            <div className="flex justify-center items-center space-x-1 m-2">
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
                          "& fieldset": { border: "none" },
                          backgroundColor: "transparent"
                        }}
                      />
              </span>
            </div>
          </div>
      </div>
  )
}

export default FilterSelect