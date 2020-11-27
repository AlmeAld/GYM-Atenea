import React from "react";
import clsx from "clsx";
import "./mainLayout.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SpotifyLogo from "../../assets/spotify.png";
import Logo from "../../assets/Logo-Regional-Blanco.png";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FolderIcon from "@material-ui/icons/Folder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import fire from "../../firebase.js";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${121}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: "black",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "black",
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "black",
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(15) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(15) + 1,
    },
    logo: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    marginTop: 6,
    color: " rgba(110, 60, 210, 1)",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    color: "black",
  },
  logoSpotify: {
    width: 40,
  },
  tr: {
    fontSize: "0.9rem",
    textDecoration: "none",
    background: "black",
    "&:hover": {
      background: "#6E3CD2",
    },
  },
  // profile menu
  wrapperProfileMenu: {
    position: "relative",
    zIndex: "3000",
  },
  collapseMenu: {
    position: "absolute",
    top: "100%",
    width: "400px",
    background: "white",
    color: "#000",
  },
  onlyIcon: {
    display: "block",
    marginBottom: "20px",
    marginTop: "20px",
  },
}));

function MenuWithSubMenus({ icon, menuText, submenus }) {
  const classes = useStyles();

  const [isCollapse, setIsCollpase] = React.useState(false);
  return (
    <>
      <ListItem
        className={classes.tr}
        button
        onClick={() => setIsCollpase(!isCollapse)}
      >
        <ListItemIcon id="icon">{icon}</ListItemIcon>
        <ListItemText>{menuText}</ListItemText>
        {isCollapse ? <ExpandLess /> : <ArrowForwardIosIcon id="arrow-icon" />}
      </ListItem>
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        {submenus.map((sub) => (
          <List component="div" disablePadding>
            <Link to={sub.route} className="linkClass">
              <ListItem button>
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText className="subitem">{sub.text}</ListItemText>
              </ListItem>
            </Link>
          </List>
        ))}
      </Collapse>
    </>
  );
}

function ProfileMenu({ icon, menuText, submenus }) {
  const classes = useStyles();

  const [isCollapse, setIsCollpase] = React.useState(false);
  const SignOut = () => {
    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("user out");
      })
      .catch(function (error) {
        console.log("An error happened");
      });
  };
  return (
    <Grid className={classes.wrapperProfileMenu}>
      <Grid className={classes.sectionDesktop}>
        <Typography className={classes.title} variant="h6" noWrap>
          Andrea Velásquez
        </Typography>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => setIsCollpase(true)}
          className="icon-nav"
        >
          <AccountCircle id="avatar" className={classes.icon} />
        </IconButton>
      </Grid>
      <Collapse
        className={classes.collapseMenu}
        in={isCollapse}
        timeout="auto"
        unmountOnExit
      >
        <Grid>
          <MenuItem onClick={() => setIsCollpase(false)}>Profile</MenuItem>
          <MenuItem onClick={() => setIsCollpase(false)}>My account</MenuItem>
          <MenuItem onClick={SignOut}>Salir</MenuItem>
        </Grid>
      </Collapse>
    </Grid>
  );
}

function MainLayout({ children }) {
  //styles
  const classes = useStyles();
  const theme = useTheme();
  //hooks
  const [open, setOpen] = React.useState(true);
  //sidebar hooks
  const [openMainMenu, setOpenMainMenu] = React.useState(true);
  //functions
  // abrir la lista deplegable del sidebar
  //abrir el menu
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // perfil opciones
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className="menu-icon" />
          </IconButton>
          <IconButton
            aria-label="show 17 new notifications"
            className="icon-nav"
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon className={classes.icon} />
            </Badge>
          </IconButton>
          <div className={classes.grow} />
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {open ? (
          <>
            <div className="logo-cont">
              <img src={Logo} alt="" />
            </div>
            <Divider />
            <List>
              <Link to="/Resumen" className="linkClass">
                <ListItem button className={classes.tr}>
                  <ListItemIcon id="icon">
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx(classes.menuButton, {
                      [classes.hide]: !open,
                    })}
                    primary={"Resumen"}
                  />
                  <ArrowForwardIosIcon id="arrow-icon" />
                </ListItem>
              </Link>
              <Link to="/Reclamos" className="linkClass">
              <MenuWithSubMenus
                icon={<AnnouncementIcon />}
                menuText="Reclamos"
                submenus={[
                  {
                    route: "/IngresoReclamos",
                    text: "IngresoReclamos",
                  },
                  {
                    route: "/SeguimientosReclamos",
                    text: "SeguimientosReclamos",
                  },
                ]}
              />
              </Link>
              <Link to="/ReportesProveedores" className="linkClass">
                <ListItem button className={classes.tr}>
                  <ListItemIcon id="icon">
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx(classes.menuButton, {
                      [classes.hide]: !open,
                    })}
                    primary={"Proveedores"}
                  />
                  <ArrowForwardIosIcon id="arrow-icon" />
                </ListItem>
              </Link>

              <MenuWithSubMenus
                icon={<AnnouncementIcon />}
                menuText="Chat Interno"
                submenus={[
                  {
                    route: "/Comunicaciones",
                    text: "Firma por Defecto",
                  },
                  {
                    route: "/Comunicaciones",
                    text: "Texto Legal",
                  },
                  {
                    route: "/Comunicaciones",
                    text: "Nueva Comunicacion",
                  },
                ]}
              />
              <MenuWithSubMenus
                icon={<AnnouncementIcon />}
                menuText="Reportes"
                submenus={[
                  {
                    route: "/ReportesProveedores",
                    text: "Proveedor -- GyM",
                  },
                  {
                    route: "/ReportesProveedores",
                    text: "GyM -- Proveedor",
                  },
                ]}
              />

              <ListItem button className={classes.tr}>
                <ListItemIcon id="icon">
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(classes.menuButton, {
                    [classes.hide]: !open,
                  })}
                  primary={"Gestor documental"}
                />
                <ArrowForwardIosIcon id="arrow-icon" />
              </ListItem>
            </List>
            <Divider />
          </>
        ) : (
          <>
            <div className="logo-cont-collapse">
              <img src={Logo} alt="" />
            </div>
            <Divider />
            <List>
              <Link to="/Resumen" className="linkClass">
                <ListItemIcon className={classes.onlyIcon} id="icon">
                  <AssessmentIcon />
                </ListItemIcon>
              </Link>
              <Link to="/IngresoReclamos" className="linkClass">
                <ListItemIcon className={classes.onlyIcon} id="icon">
                  <AnnouncementIcon />
                </ListItemIcon>
              </Link>
              <Link to="/Proveedores" className="linkClass">
                <ListItemIcon className={classes.onlyIcon} id="icon">
                  <PeopleAltIcon />
                </ListItemIcon>
              </Link>
              <Link to="/Comunicaciones" className="linkClass">
                <ListItemIcon className={classes.onlyIcon} id="icon">
                  <AnnouncementIcon />
                </ListItemIcon>
              </Link>
              <Link to="/ReportesProveedores" className="linkClass">
                <ListItemIcon className={classes.onlyIcon} id="icon">
                  <AnnouncementIcon />
                </ListItemIcon>
              </Link>

              <ListItemIcon className={classes.onlyIcon} id="icon">
                <FolderIcon />
              </ListItemIcon>
            </List>
            <Divider />
          </>
        )}

        <div className="divLogo">
          <img src={SpotifyLogo} alt="" className={classes.logoSpotify} />
          {/* <iframe
          src="https://open.spotify.com/embed/playlist/4xJOCBqKbD4u9Q55QMxrrc"
          width="300"
          title="spotify"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        /> */}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;