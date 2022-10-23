import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BookingInterface } from "../models/IUser";
import { format } from 'date-fns'
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
 createStyles({
   container: {marginTop: theme.spacing(2)},
   table: { minWidth: 650},
   tableSpace: {marginTop: 20},
 })
);
 
function Booking() {
 const classes = useStyles();
 const [booking, setBooking] = React.useState<BookingInterface[]>([]);
 
 const getBooking = async () => {
   const apiUrl = "http://localhost:8080/booking";
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
     <Container className={classes.container} maxWidth="md">
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
             to="/create"
             variant="contained"
             color="primary"
           >
             สร้างรายการจอง
           </Button>
         </Box>
       </Box>
       <TableContainer component={Paper} className={classes.tableSpace}>
         <Table className={classes.table} aria-label="simple table">
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
             </TableRow>
           </TableHead>
           <TableBody>
             {booking.map((user: BookingInterface) => (
               <TableRow key={user.ID}>
                 <TableCell align="center">{user.ID}</TableCell>
                 <TableCell align="left" size="medium">
                   {user.Member.First_Name}
                 </TableCell>
                 <TableCell align="left">{user.Member.Last_Name}</TableCell>
                 <TableCell align="left">{user.Room.Name}</TableCell>
                 <TableCell align="left">{user.Usage.Name}</TableCell>
                 <TableCell align="center">{moment(user.BookingTimeStart).format( 'DD MMMM yyyy HH:mm ')}</TableCell>
                 <TableCell align="center">{moment(user.BookingTimeStop).format( 'DD MMMM yyyy HH:mm ')}</TableCell>
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