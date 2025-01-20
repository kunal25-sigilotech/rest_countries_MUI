import { MenuItem, Stack, TextField } from "@mui/material";
import { useCountryData } from "../context/CountryContext";
import { useEffect } from "react";

function FilterCountry() {
  const { dispatch, curRegion } = useCountryData();

  useEffect(() => {
    dispatch({ type: "FILTER", payload: "All" });
  }, [dispatch]);

  return (
    <Stack sx={{ boxShadow: "0 3px 3px rgba(0,0,0,0.2)" }}>
      <TextField
        select
        label={curRegion}
        value={curRegion}
        variant="filled"
        fullWidth
        bgcolor="primary.main"
        sx={{
          bgcolor: "primary.light",
          "& .MuiInputLabel-root": {
            color: "primary.contrastText",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "primary.contrastText",
          },
        }}
        onChange={(e) => dispatch({ type: "FILTER", payload: e.target.value })}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </TextField>
    </Stack>
  );
}

export default FilterCountry;
