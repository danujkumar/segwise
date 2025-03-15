import React, { useState } from "react";
import Plus from "../assets/Plus";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchBox from "./Inner/SearchBox";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FilterSelect from "./FilterSelect";
// import "../styles/filterbox.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FilterBox() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [filters, setFilters] = useState(1);
  const [box, setBox] = React.useState(false);
  return (
    <div className="flex flex-col items-center w-fit">
      <div
        className="w-fit m-1 rounded-md"
        style={{
          padding: "0.5px",
          height: "fit-content",
          backgroundColor: "#f2f2f2",
        }}
      >
        <button onClick={() => setBox(!box)}>
          <div
            className="w-80 m-2 h-10 flex items-center rounded-md"
            style={{ background: "#F6FDED" }}
          >
            <div className="flex items-center space-x-2 m-2">
              <Plus />
              <span
                style={{
                  font: "inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#4B5563",
                }}
              >
                Add Filter
              </span>
            </div>
          </div>
        </button>
        {Array.from({ length: filters }, (_, index) => (
            <FilterSelect key={index} />
        ))}
      </div>

      {box && (
        <div
          className="w-80 -mt-2 m-2 h-fit flex-col items-center rounded-2xl border-1 border-gray-200 shadow-lg"
          style={{ background: "#FFFFFF" }}
        >
          <SearchBox />
          <div className="flex items-center m-0 gap-1.5 border-b-2  pr-0 pl-0 mr-0 ml-0 border-y-gray-100">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
              sx={{
                padding: "0px",
                margin: "0px",
                height: "fit-content",
                "& .MuiTabs-indicator": { backgroundColor: "black" },
              }}
              textColor="inherit" // Use "inherit" to prevent restriction
            >
              <Tab
                label="Dimensions"
                sx={{ textTransform: "none", height: 45 }}
              />
              <Tab
                label="Tags"
                sx={{ textTransform: "none", width: 10 }}
                {...a11yProps(1)}
              />
              <Tab
                label="Metrics"
                sx={{ textTransform: "none" }}
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0}>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999", padding: 0 }}>
              <Checkbox />
              <ListItemText primary={"Select all"} sx={{ fontWeight: 500 }} />
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999", padding: 0 }}>
              <Checkbox />
              <ListItemText primary={"Pumpkin"} />
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999", padding: 0 }}>
              <Checkbox />
              <ListItemText primary={"Cat"} />
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999", padding: 0 }}>
              <Checkbox />
              <ListItemText primary={"Ghost"} />
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999", padding: 0 }}>
              <Checkbox />
              <ListItemText primary={"Egg"} />
            </MenuItem>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999" }}>
              Character
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999" }}>
              Background
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999" }}>
              Elements
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999" }}>
              CTA Position
            </MenuItem>
            <MenuItem sx={{ borderRadius: 1.5, color: "#999999" }}>
              CTA Text
            </MenuItem>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </div>
      )}
    </div>
  );
}

export default FilterBox;
