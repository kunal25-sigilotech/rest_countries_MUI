import { Stack, TextField } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCountryData } from "../context/CountryContext";

function SearchCountry() {
  const { curRegion, countryData, dispatch } = useCountryData();
  const [query, setQuery] = useState("");

  const memoizedCountries = useMemo(() => {
    const data =
      curRegion === "All"
        ? countryData
        : countryData.filter((country) => country.region === curRegion);

    return data;
  }, [curRegion, countryData]);

  const handleSearch = useCallback(
    (queryStr) => {
      const modifiedQueryStr = queryStr.trim().toLowerCase();
      const foundCountries = memoizedCountries.filter((country) =>
        country.name.common.toLocaleLowerCase().includes(modifiedQueryStr)
      );

      dispatch({ type: "QUERYING", payload: true });
      dispatch({ type: "SEARCH", payload: foundCountries });
    },
    [dispatch, memoizedCountries]
  );

  useEffect(() => {
    if (!query) {
      dispatch({ type: "SEARCH", payload: memoizedCountries });
      dispatch({ type: "QUERYING", payload: false });
      return;
    }

    const timer = setTimeout(() => handleSearch(query), 400);
    return () => clearTimeout(timer);
  }, [query, dispatch, memoizedCountries, handleSearch]);

  return (
    <Stack
      sx={{ boxShadow: "0 3px 3px  rgba(0, 0, 0, 0.2)" }}
      bgcolor="primary.light"
    >
      <TextField
        label="Search for a country..."
        type="text"
        variant="filled"
        sx={{
          bgcolor: "primary.light",
          "& .MuiInputLabel-root": {
            color: "primary.contrastText",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "primary.contrastText",
          },
        }}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Stack>
  );
}

export default SearchCountry;
