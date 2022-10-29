import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookingHistory from "./components/BookingHistory";
import BookingCreate from "./components/BookingCreate";
import Home from "./components/Home";
import SignIn from "./components/signin";
import BorrowList from "./components/Borrowlist";
import BorrowListCreate from "./components/BorrowlistCreate";
import Equipments from "./components/Equipments";
import EquipmentCreate from "./components/EquipmentCreate";
import Food from "./components/Food";
import FoodorderCreate from "./components/FoodorderCreate";
import Room from "./components/Room";
import RoomCreate from "./components/RoomCreate";
import Bill from "./components/Bill";
import BillCreate from "./components/BillCreate";
import Users from "./components/Users";
import UserCreate from "./components/UserCreate";

export default function App() {
  const [token, setToken] = React.useState<String | null>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (!token) {
    return <SignIn />;
  }
  
 return (
   <Router>
    {token && (<div>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/bookinghistory" element={<BookingHistory />} />
         <Route path="/bookingcreate" element={<BookingCreate />} />

         <Route path="/user" element={<Users/>}/>
         <Route path="/usercreate" element={<UserCreate />}/>

         <Route path="/borrowlist" element={<BorrowList />} />
         <Route path="/borrowlistcreate" element={<BorrowListCreate />} />

         <Route path="/equipments" element={<Equipments />} />
         <Route path="/equipmentscreate" element={<EquipmentCreate />} />

         <Route path="/foodorder/:bookingId" element={<Food />} />
         <Route path="/foodordercreate/:bookingId" element={<FoodorderCreate />} />

         <Route path="/room" element={<Room />} />
         <Route path="/roomcreate" element={<RoomCreate />} />

         <Route path="/bill" element={<Bill />} />
         <Route path="/billcreate" element={<BillCreate />} />
       </Routes>
     </div>)}
   </Router>
 );
}