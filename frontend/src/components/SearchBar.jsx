import { useState } from "react";
import { debounce } from "lodash";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { SearchNormal1 } from "iconsax-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Debounce directly in handleChange
    debounce(() => onSearch(newQuery), 300)();
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      size="small"
      value={query}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <SearchNormal1 style={{ color: "gray", marginRight: 14 }} />
        ),
      }}
      sx={{
        bgcolor: "white",
        borderRadius: 1,
        "& fieldset": { border: "none" },
      }}
    />
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
