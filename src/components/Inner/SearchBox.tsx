import Search from "../../assets/Search";
import { TextField } from "@mui/material";

function SearchBox() {
  return (
    <div className="flex items-center m-0 gap-0 border-b-2 pr-0 pl-0 mr-0 ml-0 border-y-gray-100">
      <div className="pl-2 pb-0 pt-0">
        <Search />
      </div>
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
    </div>
  );
}

export default SearchBox;
