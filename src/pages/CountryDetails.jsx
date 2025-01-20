import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ONE_COUNTRY } from "../utils/endpoints";

function CountryDetails() {
  const { name } = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");
  const [languages, setLanguages] = useState([]);
  const [currency, setCurrency] = useState("");
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function getCountryData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${ONE_COUNTRY}${name}`);
        const data = await res.json();
        const lang = Object.values(data[0].languages);
        const cur = Object.values(data[0].currencies)[0].name;
        const borders = data[0].borders || [];
        setCountry(data.at(0));
        setLanguages(lang);
        setCurrency(cur);
        setBorderCountries(borders);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch the country...");
        setIsLoading(false);
      }
    }
    getCountryData();
  }, [name]);

  if (isloading || !country)
    return (
      <div>
        <p>Loading details....</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <Grid2
      component="section"
      container
      rowGap={4}
      p={2}
      sx={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <Grid2 size={12}>
        <Button variant="contained">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "600",
            }}
          >
            &larr; Back
          </Link>
        </Button>
      </Grid2>
      <Grid2 component="figure" size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
        <img
          src={country.flags.png}
          alt={country.name.common}
          style={{
            height: "100%",
            width: "100%",
            display: "block",
            objectFit: "cover",
            aspectRatio: `${
              country.name.common === "Switzerland" ? "3/2" : "16/9"
            }`,
          }}
        />
      </Grid2>
      <Grid2
        component="aside"
        offset={{ xl: 0, lg: 0, md: 1, sm: 1, xs: 1 }}
        size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}
      >
        <Box
          sx={{
            display: "grid",
            rowGap: "16px",
            gridTemplateColumns: {
              xl: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
              md: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              xs: "repeat(1,1fr)",
            },
          }}
        >
          <Typography
            variant="h4"
            fontSize="32px"
            fontWeight="600"
            component="h2"
            marginBottom="28px"
            sx={{ gridColumn: "1/-1" }}
          >
            {country.name.common}
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Population:
              </Typography>
              <Typography variant="body1">
                {new Intl.NumberFormat("en-US").format(country.population)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Sub-Region:
              </Typography>
              <Typography variant="body1">{country.subregion}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Capital:
              </Typography>
              <Typography variant="body1">{country.capital}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Top-level-domain:
              </Typography>
              <Typography variant="body1">{country.tld[0]}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Currency:
              </Typography>
              <Typography variant="body1">{currency}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                Languages:
              </Typography>
              <Typography variant="body1">{languages.join(", ")}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ gridColumn: "1/-1" }}
            mt="24px"
          >
            <Typography variant="body1" fontWeight="600">
              Border countries:
            </Typography>
            <Typography variant="body1">
              {borderCountries.length === 0
                ? "None"
                : borderCountries.join(", ")}
            </Typography>
          </Stack>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default CountryDetails;
