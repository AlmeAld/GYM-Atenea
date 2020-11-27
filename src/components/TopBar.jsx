import React from "react";
import "./topBar.scss";
import clsx from 'clsx';
import LeftMenu from "./LeftMenu"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';


const drawerWidth = 240;
// cambiando estilos  y estoy revisando todo lo que no sirva para limpiar codigo
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor:"white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    marginTop:6,
    color:' rgba(110, 60, 210, 1)',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  icon:{
    color:'black'
  }
}));

function TopBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Salir</MenuItem>
    </Menu>
  );

  return (    
  <>
    <CssBaseline />
    <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}>
      <Toolbar>
        <IconButton
          edge="start"
          onClick={handleDrawerOpen}
    
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon className="menu-icon"/>
        </IconButton>
          <IconButton aria-label="show 17 new notifications"  className="icon-nav" >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon className={classes.icon}/>
            </Badge>
          </IconButton>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Typography className={classes.title} variant="h6" noWrap>
          Andrea Velásquez
        </Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            className="icon-nav"
          >
            <AccountCircle id="avatar"className={classes.icon} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    <LeftMenu open={open} handleDrawerClose={handleDrawerClose} ></LeftMenu>
      {renderMenu}
    </>
    )
}

export default TopBar;
