import React, { ChangeEvent, useEffect, useState, SyntheticEvent } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link as RouterLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PaymentIcon from '@mui/icons-material/Payment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import SignIn from './signin'
export default function Navbar() {

  const [token, settoken] = React.useState<String>("");
  const [role, setrole] = React.useState<String>("");

  const menu_employee = [

    { name: "บันทึกข้อมูลผู้ใช้บริการ", icon: <MeetingRoomIcon />, path: "/usercreate" },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <AssignmentIcon />, path: "/user" },
    { name: "บันทึกรายละเอียดห้อง", icon: <MeetingRoomIcon />, path: "/roomcreate" },
    { name: "ข้อมูลห้อง", icon: <AssignmentIcon />, path: "/room" },
    { name: "บันทึกรายละเอียดอุปกรณ์เสริม", icon: <ConstructionIcon />, path: "/equipmentscreate" },
    { name: "ข้อมูลอุปกรณ์เสริม", icon: <MenuBookIcon />, path: "/equipments" },
    { name: "ยืมอุปกรณ์", icon: <HomeRepairServiceIcon />, path: "/borrowlistcreate" },
    { name: "รายการยืมอุปกรณ์", icon: <MenuBookIcon />, path: "/borrowlist" },
    { name: "การชำระเงิน", icon: <PaymentIcon />, path: "/billcreate" },
    { name: "ประวัติการชำระเงิน", icon: <CreditScoreIcon />, path: "/bill" },

  ]

  const menu_user = [

    { name: "บันทึกการจองใช้ห้อง", icon: <BedroomChildIcon />, path: "/bookingcreate" },
    { name: "รายการจองใช้ห้อง", icon: <MenuBookIcon />, path: "/bookinghistory" },
    { name: "การสั่งอาหารว่าง", icon: <FastfoodIcon />, path: "/foodordercreate" },
    { name: "รายการการสั่งอาหารว่าง", icon: <MenuBookIcon />, path: "/food" },

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

  useEffect(() => {
   
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    if (token) {
      settoken(token);
    }
    if (role) {
      setrole(role);
    }
  }, []);

  if (role === 'employee') {


    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
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
                {menu_employee.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                ระบบบันทึกการจองใช้ห้อง
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }


  if (role === 'user') {


    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
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
                {menu_user.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                ระบบการจองใช้ห้อง
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return <SignIn/>;
}
