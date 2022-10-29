import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BookingInterface } from "../models/IBooking";
import { format } from 'date-fns'
import moment from 'moment';


 
function Booking() {
 const [booking, setBooking] = React.useState<BookingInterface[]>([]);
 
 const getBooking = async () => {
   const apiUrl = `http://localhost:8080/booking/member/${localStorage.getItem("id")}`;
   const requestOptions = {
     method: "GET",
     headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
   };
 
   fetch(apiUrl, requestOptions)
     .then((response) => response.json())
     .then((res) => {
       console.log(res.data);
       if (res.data) {
         setBooking(res.data);
       } else {
         console.log("else");
       }
     });
 };
 
 useEffect(() => {
   getBooking();
 }, []);
 
 return (
   <div>
     <Container sx={{marginTop: 2}} maxWidth="md">
       <Box display="flex">
         <Box flexGrow={1}>
           <Typography
             component="h2"
             variant="h6"
             color="primary"
             gutterBottom
           >
             รายการจองใช้ห้อง
           </Typography>
         </Box>
         <Box>
           <Button
             component={RouterLink}
             to="/bookingcreate"
             variant="contained"
             color="primary"
           >
             สร้างรายการจอง
           </Button>
         </Box>
       </Box>
       <TableContainer component={Paper} sx={{ minWidth: 650}}>
         <Table sx={{marginTop: 2}} aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell align="center" width="5%">
                 ID
               </TableCell>
               <TableCell align="left" width="10%">
                 First
               </TableCell>
               <TableCell align="left" width="10%">
                 Last
               </TableCell>
               <TableCell align="left" width="5%">
                 Room
               </TableCell>
               <TableCell align="left" width="10%">
                 Usage
               </TableCell>
               <TableCell align="center" width="15%">
                 Time Start
               </TableCell>
               <TableCell align="center" width="15%">
                 Time End
               </TableCell>
               <TableCell align="center" width="15%">
                 
               </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {booking.map((book: BookingInterface) => (
               <TableRow key={book.ID}>
                 <TableCell align="center">{book.ID}</TableCell>
                 <TableCell align="left" size="medium">
                   {book.Member.FirstName}
                 </TableCell>
                 <TableCell align="left">{book.Member.LastName}</TableCell>
                 <TableCell align="left">{book.Room.Name}</TableCell>
                 <TableCell align="left">{book.Usage.Name}</TableCell>
                 <TableCell align="center">{moment(book.BookingTimeStart).format( 'DD MMMM yyyy HH:mm ')}</TableCell>
                 <TableCell align="center">{moment(book.BookingTimeStop).format( 'DD MMMM yyyy HH:mm ')}</TableCell>
                 <TableCell align="center">
                  <Button variant="contained" color="primary" component={RouterLink} to={"/foodordercreate/" + book.ID}>
                    สั่งอาหาร
                  </Button>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
     </Container>
   </div>
 );
}
 
export default Booking;