import React, { ChangeEvent,useEffect,useState, SyntheticEvent } from 'react';
// import { makeStyles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import MenuBookIcon from  "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link as RouterLink } from "react-router-dom";
// import { createStyles, Theme } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// const useStyles = makeStyles((theme) => ({
//  root: {flexGrow: 1},
//  menuButton: {marginRight: theme.spacing(2)},
//  title: {flexGrow: 1},
//  navlink: {color: "white",textDecoration: "none",marginRight:"auto"},
// }));
function Navbar() {
//  const classes = useStyles();
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
   <div style={{flexGrow: 1}}>
     <AppBar position="static">
       <Toolbar>
         <IconButton
           onClick={toggleDrawer(true)}
           edge="start"
           sx={{marginRight: 2}}
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

         <Link style={{color: "white",textDecoration: "none",marginRight:"auto"}} to="/">
           <Typography variant="h6" sx={{ flexGrow: 1 }}>
             ระบบบันทึกการจองใช้ห้อง
           </Typography>
         </Link>
         
       </Toolbar>
     </AppBar>
   </div>
 );
}
export default Navbar;