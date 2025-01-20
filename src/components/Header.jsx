import { Button, Grid2, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Header({ curTheme, onSetTheme }) {
  return (
    <Grid2
      container
      rowGap={4}
      sx={{
        alignItems: "center",
        maxWidth: "1280px",
        width: "100%",
        margin: "0 auto",
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
      <Grid2 size={6} component="header">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "18px",
              sm: "22px",
              md: "24px",
              lg: "24px",
              xl: "28px",
            },
          }}
        >
          Where in the world?
        </Typography>
      </Grid2>

      <Grid2 size={6}>
        {curTheme === "dark" ? (
          <Button
            variant="text"
            aria-label="Toggle light/dark mode"
            startIcon={<DarkModeOutlinedIcon sx={{ stroke: "#fff" }} />}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginLeft: "auto",
            }}
            onClick={() =>
              onSetTheme((cur) => (cur === "light" ? "dark" : "light"))
            }
          >
            <Typography
              variant="body1"
              component="span"
              fontWeight="500"
              color="#fff"
            >
              Dark
            </Typography>
          </Button>
        ) : (
          <Button
            variant="text"
            aria-label="Toggle light/dark mode"
            startIcon={<Brightness7Icon sx={{ fill: "#fbc02d" }} />}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginLeft: "auto",
            }}
            onClick={() =>
              onSetTheme((cur) => (cur === "light" ? "dark" : "light"))
            }
          >
            <Typography
              variant="body1"
              fontWeight="500"
              component="span"
              color="#000"
            >
              Light
            </Typography>
          </Button>
        )}
      </Grid2>
    </Grid2>
  );
}

export default Header;
