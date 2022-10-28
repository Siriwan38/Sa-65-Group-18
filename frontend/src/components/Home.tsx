import React from "react";

import Container from "@mui/material/Container";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        {/* <Tabs value={value} onChange={handleChange}>
          <Tab label="ระบบบันทึกการจองใช้ห้อง" id="booking-tab" aria-controls="booking-tabpanel" />
        </Tabs> */}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant="scrollable" scrollButtons={true} allowScrollButtonsMobile aria-label="lab API tabs example">
              <Tab label="ระบบบันทึกการจองใช้ห้อง" value="1" />
              <Tab label="ระบบยืมอุปกรณ์" value="2" />
              <Tab label="ระบบสมัครสมาชิก" value="3" />
              <Tab label="ระบบบันทึกข้อมูลอุปกรณ์" value="4" />
              <Tab label="ระบบสั่งอาหารว่าง" value="5" />
              <Tab label="ระบบชำระเงิน" value="6" />
              <Tab label="ระบบบันทึกข้อมูลห้อง" value="7" />
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
      {/* <Container sx={{ marginTop: 2}} maxWidth="md">
      <Tabs value={value} onChange={handleChange}> 
          <Tab label="ระบบบันทึกการจองใช้ห้อง" id="booking" aria-controls="booking" />
        </Tabs>
        
        
        <TabPanel value={value} index={0} id="booking" ariaLabelledby="booking">
          <p>Test</p>
        </TabPanel>
        
        
        
        
        
        <h1 style={{ textAlign: "center" }}>ระบบบันทึกการจองใช้ห้อง </h1>
        <h4><u>Requirements</u></h4>
        <p>
                ระบบการจองใช้บริการห้องของบริษัท Room Booking เป็นระบบที่ให้สมาชิกระบบจองใช้ห้อง 
        ที่เป็นสมาชิกเท่านั้น Log in เข้าระบบเพื่อทำการจองห้องตามที่สมาชิกต้องการ เช่น ห้องเรียน ห้องปฏิบัติการ 
        หรือห้องอ่านหนังสือ ซึ่งจะสามารถเลือกประเภทการใช้ห้องได้ โดยจะมีการบันทึกการจองใช้ห้องของสมาชิกระบบจองห้องที่ใช้บริการ 
        ได้แก่ ข้อมูลการจองใช้บริการ วันที่ เวลา รวมถึงจำนวนผู้เข้าใช้งานในห้องที่จองไว้ ทั้งนี้สมาชิกระบบจองห้องสามารถจองล่วงหน้าได้ภายในสัปดาห์นั้น ๆ 
        และมี รายการอาหารว่างเพิ่มเติม
	          ระบบบันทึกการจองใช้ห้อง เป็นระบบที่ให้สมาชิกระบบจองห้องต้อง Log in เพื่อทำเลือกห้อง ระบุวันเวลาที่ต้องการจองใช้ห้อง 
        ซึ่งระบบจะทำการบันทึกข้อมูลการจองใช้ห้องโดยอัตโนมัติเมื่อสมาชิกระบบจองห้องได้กดยืนยันข้อมูลแล้ว

        </p>
        <br />
        <h4><u>User Story</u> (ระบบบันทึกการจองใช้ห้อง )</h4>
        <p> 
          <b>ในบทบาทของ</b>	สมาชิกระบบจองใช้ห้อง<br />
          <b>ฉันต้องการ</b>	ให้ระบบสามารถบันทึกข้อมูลการจองใช้ห้องได้<br />
          <b>เพื่อ</b>	 เก็บข้อมูลบันทึกการจองใช้ห้องของสมาชิกระบบจองใช้ห้อง<br />
        </p> 
      </Container> */}
    </div>
  );
}
export default Home;