import { Button, Grid2, Typography } from "@mui/material";

function Header({ onSetDarkMode }) {
  return (
    <Grid2
      container
      p={2}
      rowGap={4}
      sx={{
        alignItems: "center",
        maxWidth: "1280px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Grid2 size={6} component="header">
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Where in the world?
        </Typography>
      </Grid2>

      <Grid2 size={6}>
        <Button
          variant="contained"
          aria-label="Toggle light/dark mode"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginLeft: "auto",
          }}
          onClick={() => onSetDarkMode((cur) => !cur)}
        >
          <span>Light</span>
        </Button>
      </Grid2>
    </Grid2>
  );
}

export default Header;
