import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout({ onSetDarkMode }) {
  return (
    <Box
      bgcolor="primary.main"
      sx={{
        minHeight: "100dvh",
        display: "grid",
        gridTemplateRows: "min-content 1fr",
        gap: "16px",
      }}
    >
      <Paper component="header" sx={{ margin: 0, padding: 0 }}>
        <Header onSetDarkMode={onSetDarkMode} />
      </Paper>
      <Box component="main" sx={{ margin: 0, padding: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
