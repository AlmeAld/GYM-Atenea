import React from 'react';
import './leftMenu.scss';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SpotifyLogo from '../assets/spotify.png';
import Logo from '../assets/Logo-Regional-Blanco.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
const drawerWidth = 240;
// estilos de ejemplo ya estoy revisando la documentacion para hacerlos con sass
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: 'black',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  ListItemText: {
    color: 'white',
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: 'black',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: 'black',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(15) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(15) + 1,
    },
    logo: {
      display: 'none',
    },
  },
  logoSpotify: {
    width: 40,
  },
  tr: {
    fontSize:'0.9rem',
    textDecoration:"none",
    background: "black",
    '&:hover': {
       background: "#6E3CD2",
    },
  },
}));

function LeftMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  // list states
  const [listOpen, setListOpen] = React.useState(false);
  const handleClick = () => {
    setListOpen(!listOpen);
  };
  const [listOpenOne, setListOpenOne] = React.useState(false);
  const handleClickOne = () => {
    setListOpenOne(!listOpenOne);
  };
  const [listOpenTwo, setListOpenTwo] = React.useState(false);
  const handleClickTwo = () => {
    setListOpenTwo(!listOpenTwo);
  };

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
        <Link to="/Resumen" className="linkClass">
          <ListItem button className={classes.tr}>
            <ListItemIcon id="icon">
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText
              className={clsx(classes.menuButton, {
                [classes.hide]: !props.open,
              })}
              primary={'Resumen'}
            />
            <ArrowForwardIosIcon id="arrow-icon"/>
          </ListItem>
        </Link>
        <ListItem  className={classes.tr} button onClick={handleClick}>
          <ListItemIcon id="icon">
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText
            className={clsx(classes.menuButton, {
              [classes.hide]: !props.open,
            })}
            primary="Reclamos"
          />
          {listOpen ? <ExpandLess /> : <ArrowForwardIosIcon id="arrow-icon"/>}
        </ListItem>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/IngresoReclamos" className="linkClass">
              <ListItem
                button
                // className={classes.nested}
              >
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText
                  className="subitem"
                  primary="Ingresar reclamo"
                />
              </ListItem>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/SeguimientosReclamos" className="linkClass">
              <ListItem
                button
                // className={classes.nested}
              >
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="Seguimiento reclamo" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <Link to="/Proveedores" className="linkClass">
          <ListItem button className={classes.tr}>
            <ListItemIcon id="icon">
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText className={clsx(classes.menuButton, {
              [classes.hide]: !props.open,
            })} primary={'Proveedores'} />
            <ArrowForwardIosIcon id="arrow-icon"/>
          </ListItem>
        </Link>
        <ListItem className={classes.tr} button onClick={handleClickOne}>
          <ListItemIcon id="icon">
            <MailIcon clasName="icon-side-menu" />
          </ListItemIcon>
          <ListItemText className={clsx(classes.menuButton, {
              [classes.hide]: !props.open,
            })} primary="Chat interno" />
          {listOpenOne ? <ExpandLess /> : <ArrowForwardIosIcon id="arrow-icon"/>}
        </ListItem>
        <Collapse in={listOpenOne} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Comunicaciones" className="linkClass">
              <ListItem
                button
                // className={classes.nested}
              >
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="Firma por defecto" />
              </ListItem>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/Comunicaciones" className="linkClass">
              <ListItem
                button
                // className={classes.nested}
              >
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="Texto Legal" />
              </ListItem>
            </Link>
          </List>

          <List component="div" disablePadding>
            <Link to="/Comunicaciones" className="linkClass">
              <ListItem button>
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="Nueva comunicación" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem className={classes.tr} button onClick={handleClickTwo}>
          <ListItemIcon id="icon">
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText className={clsx(classes.menuButton, {
              [classes.hide]: !props.open,
            })} primary="Reportes" />
          {listOpenTwo ? <ExpandLess /> : <ArrowForwardIosIcon id="arrow-icon"/>}
        </ListItem>
        <Collapse in={listOpenTwo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/ReportesProveedores" className="linkClass">
              <ListItem button>
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="Proveedor--GYM" />
              </ListItem>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/ReportesProveedores" className="linkClass">
              <ListItem button> 
                <ListItemIcon id="icon"></ListItemIcon>
                <ListItemText  className="subitem" primary="GYM--Proveedor" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem button className={classes.tr}>
          <ListItemIcon id="icon">
            <FolderIcon />
          </ListItemIcon>
          <ListItemText className={clsx(classes.menuButton, {
              [classes.hide]: !props.open,
            })} primary={'Gestor documental'} />
          <ArrowForwardIosIcon id="arrow-icon"/>
        </ListItem>
     
      </List>
      <Divider />
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
  );
}

export default LeftMenu;
