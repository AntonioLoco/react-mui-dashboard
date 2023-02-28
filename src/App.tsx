import {
  styled,
  ThemeProvider,
  createTheme,
  PaletteMode,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getDesignTokens } from "./theme";

import { createContext, useState, useMemo, memo } from "react";
import { Route, Routes } from "react-router-dom";

// Import My Component
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Ticket from "./pages/Ticket";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSideBar = () => {
    setIsSidebar(!isSidebar);
  };

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const AppBox = styled(Box)({
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: "flex",
    flexGrow: "grow",
  });

  const MyOpenButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    display: "none",
    width: "50px",
    height: "60px",
    borderRadius: "100%",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  }));

  const MainBox = styled(Box)({
    width: "80%",
    height: "100%",
    border: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    zIndex: 1,
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Wrapper App */}
        <AppBox>
          {/* SideBar */}
          <SideBar
            isSidebar={isSidebar}
            toggleSidebar={toggleSideBar}
            mode={mode}
            setMode={setMode}
          />

          {/* Main Content */}
          <MainBox overflow="auto">
            <MyOpenButton onClick={toggleSideBar}>
              <MenuIcon />
            </MyOpenButton>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ticket-box" element={<Ticket />} />
            </Routes>
          </MainBox>
        </AppBox>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
