import React from "react";
import { Router, Route, browserHistory } from "react-router";
import "./leftMenu.scss";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import SpotifyLogo from "../assets/spotify.png";
import Logo from "../assets/Logo-Regional-Blanco.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const drawerWidth = 240;
// estilos de ejemplo ya estoy revisando la documentacion para hacerlos con sass
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  ListItemText: {
    color: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  logoSpotify: {
    width: 40,
  },
}));

function LeftMenu(props) {
  const classes = useStyles();
  const [listOpen, setListOpen] = React.useState(false);

  const handleClick = () => {
    setListOpen(!listOpen);
  };
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div
      // className={classes.toolbar}
      >
        <div onClick={props.handleDrawerClose} className="logo-cont">
          <img src={Logo} alt="" className="logo" />
        </div>
      </div>

      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon id="icon">
            <InboxIcon />
          </ListItemIcon>
           <ListItemText primary={"Resumen"} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon id="icon">
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Reclamos" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              // className={classes.nested}
            >
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Ingresar reclamo" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              // className={classes.nested}
            >
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Seguimiento reclamo" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon id="icon">
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Proveedores"} />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon id="icon">
            <MailIcon clasName="icon-side-menu" />
          </ListItemIcon>
          <ListItemText primary="Chat interno" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              // className={classes.nested}
            >
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Firma por defecto" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              // className={classes.nested}
            >
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Texto Legal" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Nueva comunicación" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClick}>
          <ListItemIcon id="icon">
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Proveedor--GYM" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon id="icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="GYM--Proveedor" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon id="icon">
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Gestor documental"} />
        </ListItem>
      </List>
      <Divider />
      <div className="divLogo">
        <img src={SpotifyLogo} alt="" className={classes.logoSpotify} />
        <iframe
          src="https://open.spotify.com/embed/playlist/4xJOCBqKbD4u9Q55QMxrrc"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    </Drawer>
  );
}

export default LeftMenu;
