//Import Material UI
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Button,
  Switch,
  Slide,
  Avatar,
} from "@mui/material";

//Import Material Icon
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloseIcon from "@mui/icons-material/Close";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";

//Import React Router
import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";

const SideBar = ({ isSidebar, toggleSidebar, mode, setMode }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const MyBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRightColor: theme.palette.divider,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.background.paper,
      borderRightWidth: 0,
    },
  }));

  const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
    display: "flex",
    borderRadius: 10,
    justifyContent: "space-between",
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "center",
    },
  }));

  const MyListItemText = styled(ListItemText)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.between("sm", "md")]: {
      display: "none",
    },
  }));

  const MyListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 0,
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "center",
      paddingRight: 0,
    },
  }));

  const MyButtonClose = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));

  return (
    <Slide direction="right" in={true}>
      <MyBox
        sx={{
          width: { xs: "80%", sm: "20%" },
          height: "100%",
          display: { xs: "fixed", sm: "flex" },
          position: { xs: "absolute", sm: "relative" },
          top: 0,
          left: { xs: isSidebar ? 0 : "-100%", sm: 0 },
          bottom: 0,
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Btn Close Hamburger Menu */}
        <MyButtonClose
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            display: { xs: "block", sm: "none" },
          }}
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </MyButtonClose>

        <List sx={{ paddingTop: 5, maxWidth: "100%" }}>
          {/* Avatar */}
          <ListItem sx={{ marginBottom: 5, justifyContent: "center" }}>
            <MyListItemIcon sx={{ justifyContent: "center" }}>
              <Avatar>A</Avatar>
            </MyListItemIcon>
          </ListItem>

          {/* DashboardLink */}
          <ListItem>
            <MyListItemButton
              className={location.pathname === "/" ? "active-list-item" : ""}
              onClick={() => navigate("/")}
            >
              <MyListItemIcon>
                <HomeIcon
                  className={location.pathname === "/" ? "active-icon" : ""}
                />
              </MyListItemIcon>
              <MyListItemText primary="Dashboard" />
            </MyListItemButton>
          </ListItem>

          {/* MailLink */}
          <ListItem>
            <MyListItemButton
              onClick={() => navigate("/ticket-box")}
              className={
                location.pathname === "/ticket-box" ? "active-list-item" : ""
              }
            >
              <MyListItemIcon>
                <DraftsIcon
                  className={
                    location.pathname === "/ticket-box" ? "active-icon" : ""
                  }
                />
              </MyListItemIcon>
              <MyListItemText primary="Ticket" />
            </MyListItemButton>
          </ListItem>

          {/* Analitics Link */}
          <ListItem>
            <MyListItemButton>
              <MyListItemIcon>
                <AnalyticsIcon />
              </MyListItemIcon>
              <MyListItemText primary="Analitycs" />
            </MyListItemButton>
          </ListItem>

          {/* Message Link */}
          <ListItem>
            <MyListItemButton>
              <MyListItemIcon>
                <MessageIcon />
              </MyListItemIcon>
              <MyListItemText primary="Message" />
            </MyListItemButton>
          </ListItem>

          {/* Settings Link */}
          <ListItem>
            <MyListItemButton>
              <MyListItemIcon>
                <SettingsIcon />
              </MyListItemIcon>
              <MyListItemText primary="Settings" />
            </MyListItemButton>
          </ListItem>

          {/* Toggle Dark Mode */}
          <ListItem>
            <MyListItemButton>
              <MyListItemIcon>
                <DarkModeIcon />
              </MyListItemIcon>
              <Switch
                color="primary"
                checked={mode === "dark" ? true : false}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </MyListItemButton>
          </ListItem>
        </List>
      </MyBox>
    </Slide>
  );
};

export default SideBar;
