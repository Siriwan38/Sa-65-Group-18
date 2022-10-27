import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookingHistory from "./components/BookingHistory";
import BookingCreate from "./components/BookingCreate";
import Home from "./components/Home";
import SignIn from "./components/signin";
export default function App() {

  const [token, setToken] = React.useState<String>("");

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
         <Route path="/history" element={<BookingHistory />} />
         <Route path="/create" element={<BookingCreate />} />
       </Routes>
     </div>)}
     
   </Router>
 );
}