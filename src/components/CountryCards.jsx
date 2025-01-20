import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCountryData } from "../context/CountryContext";

function CountryCards() {
  const { filteredData, error, isLoading } = useCountryData();

  if (isLoading)
    return (
      <Grid2
        container
        sx={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid2 size={12}>Loading data...</Grid2>
      </Grid2>
    );

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <Grid2
      container
      component="ul"
      columnGap={4}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "start",
      }}
      rowGap={4}
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      {filteredData.map((country, i) => (
        <Grid2
          key={i}
          component="li"
          size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 12 }}
          sx={{
            listStyle: "none",
            width: "100%",
            maxWidth: "18rem",
            borderRadius: "9px",
          }}
        >
          <Card sx={{ borderRadius: "9px" }}>
            <CardMedia
              component="img"
              loading="lazy"
              sx={{
                objectFit: "cover",
                aspectRatio: "16/9",
                borderTopRightRadius: "9px",
                borderTopLeftRadius: "9px",
              }}
              image={country.flags.png}
              alt={country.name.common}
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <Typography
                variant="h5"
                component="h2"
                fontSize="20px"
                fontWeight="700"
                gutterBottom
              >
                <Link
                  to={`/${country.name.common}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {country.name.common.length > 25
                    ? country.name.common.slice(0, 25) + "..."
                    : country.name.common}
                </Link>
              </Typography>
              <Typography
                fontSize={14}
                variant="subtitle2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={14}
                  component="span"
                  fontWeight="600"
                >
                  Population:
                </Typography>
                <Typography variant="body1" fontSize={14} component="span">
                  {new Intl.NumberFormat("en-US").format(country.population)}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  fontSize={14}
                  variant="body1"
                  component="span"
                  fontWeight="600"
                >
                  Region:
                </Typography>
                <Typography variant="body1" fontSize={14} component="span">
                  {country.region}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  fontSize={14}
                  fontWeight="600"
                >
                  Capital:
                </Typography>
                <Typography fontSize={14} variant="body1" component="span">
                  {country.name.common === "South Africa"
                    ? country.capital.slice(0, 8)
                    : country.capital}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default CountryCards;
