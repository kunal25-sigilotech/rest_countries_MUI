import { Grid2 } from "@mui/material";
import CountryCards from "../components/CountryCards";
import FilterCountry from "../components/FilterCountry";
import SearchCountry from "../components/SearchCountry";

function Homepage() {
  return (
    <Grid2
      container
      component="section"
      spacing={4}
      sx={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        justifyContent: "space-between",
        paddingInline: {
          xl: "32px",
          lg: "32px",
          md: "28px",
          sm: "24px",
          xs: "24px",
        },
        paddingBlock: "12px",
      }}
    >
      <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 8 }} component="aside">
        <SearchCountry />
      </Grid2>
      <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 4, xs: 5 }} component="aside">
        <FilterCountry />
      </Grid2>
      <Grid2 size={12}>
        <CountryCards />
      </Grid2>
    </Grid2>
  );
}

export default Homepage;
