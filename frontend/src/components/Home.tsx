import React from "react";

import Container from "@mui/material/Container";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from "@mui/material/Box";

import BookingRequirements from "./HomeComponent/BookingRequirements";
import BorrowListRequirements from "./HomeComponent/BorrowListRequirements";
import RegisterRequirements from "./HomeComponent/RegisterRequirements"
import EquipmentRequirements from "./HomeComponent/EquipmentRequirements";
import FoodOrderedRequirements from "./HomeComponent/FoodOrderedRequirements";
import PaymentRequirements from "./HomeComponent/PaymentRequirements";
import RoomRequirements from "./HomeComponent/RoomRequirements";

function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      <Container sx={{ marginTop: 2}} maxWidth="md">
        
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant="scrollable" scrollButtons={true} allowScrollButtonsMobile aria-label="lab API tabs example">
              <Tab label="ระบบบันทึกการจองใช้ห้อง" value="1" />
              <Tab label="ระบบยืมอุปกรณ์" value="2" />
              <Tab label="ระบบสมัครสมาชิก" value="3" />
              <Tab label="ระบบบันทึกข้อมูลอุปกรณ์" value="4" />
              <Tab label="ระบบสั่งอาหารว่าง" value="5" />
              <Tab label="ระบบชำระเงิน" value="6" />
              <Tab label="ระบบบันทึกรายละเอียดห้อง" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BookingRequirements />
          </TabPanel>
          <TabPanel value="2">
            <BorrowListRequirements />
          </TabPanel>
          <TabPanel value="3">
            <RegisterRequirements />
          </TabPanel>
          <TabPanel value="4">
            <EquipmentRequirements />
          </TabPanel>
          <TabPanel value="5">
            <FoodOrderedRequirements />
          </TabPanel>
          <TabPanel value="6">
            <PaymentRequirements />
          </TabPanel>
          <TabPanel value="7">
            <RoomRequirements />
          </TabPanel>
        </TabContext>
      </Container>
      
    </div>
  );
}
export default Home;