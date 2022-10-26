import React, { ChangeEvent,useEffect,useState, SyntheticEvent } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuBookIcon from  "@material-ui/icons/MenuBook";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, Theme } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
 root: {flexGrow: 1},
 menuButton: {marginRight: theme.spacing(2)},
 title: {flexGrow: 1},
 navlink: {color: "white",textDecoration: "none",marginRight:"auto"},
}));
function Navbar() {
 const classes = useStyles();
 const menu = [
  
  { name: "รายการจองห้อง", icon: <AssignmentIcon  />, path: "/history" },
  { name: "บันทึกการจองใช้ห้อง", icon: <MenuBookIcon  />, path: "/create" },
]
const [openDrawer, setOpenDrawer] = useState(false);

const toggleDrawer = (state: boolean) => (event: any) => {
  if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
    return;
  }
  setOpenDrawer(state);
}


 const Signout = () => {
  localStorage.clear();
  window.location.href = "/";
};
 return (
   <div className={classes.root}>
     <AppBar position="static">
       <Toolbar>
         <IconButton
           onClick={toggleDrawer(true)}
           edge="start"
           className={classes.menuButton}
           color="inherit"
           aria-label="menu"
         >
           <MenuIcon />
         </IconButton>
         <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
            <List  
              onClick={toggleDrawer(false)} 
              onKeyDown={toggleDrawer(false)}
            >
              <ListItem button component={RouterLink} to="/">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>หน้าแรก</ListItemText>
              </ListItem>
              <Divider />
              {menu.map((item, index) => (
                <ListItem key={index} button component={RouterLink} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
              <ListItem button onClick={Signout}>
              <ListItemIcon> <ExitToAppIcon/></ListItemIcon>
              <ListItemText>Sign out</ListItemText>
              </ListItem>

            </List>
          </Drawer>

         <Link className={classes.navlink} to="/">
           <Typography variant="h6" className={classes.title}>
             ระบบบันทึกการจองใช้ห้อง
           </Typography>
         </Link>
         
       </Toolbar>
     </AppBar>
   </div>
 );
}
export default Navbar;