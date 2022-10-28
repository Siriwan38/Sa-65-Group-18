import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { BookingInterface, UsageInterface} from "../models/IBooking";
import { RoomInterface } from "../models/IRoom";
import { UsersInterface } from "../models/IUser";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DateFnsUtils from "@date-io/date-fns";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BookingCreate() {
 const [selectedDate, setSelectedDate] = React.useState<Date | null>(
   new Date()
 );

 const  [AddedTime,setAddedTime] = React.useState<Date | null>(new Date());
 const handleAddedTime = (date: Date | null | undefined) => {
  if (!date) {
    return
  }
   setAddedTime(date);
 }
 const  [AddedTime1,setAddedTime1] = React.useState<Date | null>(new Date());
 const handleAddedTime1 = (date: Date | null | undefined) => {
  if (!date){
    return
  }
   setAddedTime1(date);
 }

 const [booking, setBooking] = React.useState<Partial<BookingInterface>>({});
 const [member, setMember] = React.useState<UsersInterface>();
 const [room, setRoom] = React.useState<RoomInterface[]>([]);
 const [usage, setUsage] = React.useState<UsageInterface[]>([]);
 const [success, setSuccess] = React.useState(false);
 const [error, setError] = React.useState(false);
 const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
   if (reason === "clickaway") {
     return;
   }
   setSuccess(false);
   setError(false);
 };
 const handleDateChange = (date: Date | null) => {
   setSelectedDate(date);
 };

 const handleInputChange = (
   event: React.ChangeEvent<{ id?: string; value: any }>
 ) => {
   const id = event.target.id as keyof typeof  booking;
   const { value } = event.target;
   setBooking({ ...booking, [id]: value });
 };


 const handleChange = (
  event: SelectChangeEvent<number>
) => {
  const name = event.target.name as keyof typeof booking;
  setBooking({
    ...booking,
    [name]: event.target.value,
  });
};

const getRoom = async () => {
  const apiUrl = "http://localhost:8080/room";
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
        setRoom(res.data);
      } else {
        console.log("else");
      }
    });
};

const getUsage = async () => {
  const apiUrl = "http://localhost:8080/usage";
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
        setUsage(res.data);
      } else {
        console.log("else");
      }
    });
};

const getMember = async () => {
  const apiUrl = `http://localhost:8080/user/${localStorage.getItem("id")}`;
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
        setMember(res.data);
      } else {
        console.log("else");
      }
    });
};

 function submit() {
  if (!AddedTime1 || !AddedTime) {
    setError(true);
    return
  }
  if (AddedTime1 < AddedTime){
    setError(true);
    return 
  }
  
   let data = {
     MemberID: member?.ID ?? "",
     RoomID: booking?.RoomID ?? "",
     UsageID: booking?.UsageID ?? "",
     BookingTimeStart : AddedTime,
     BookingTimeStop : AddedTime1,
   };
   const apiUrl = "http://localhost:8080/createbooking";
   const requestOptions = {
     method: "POST",
     headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
     body: JSON.stringify(data),
   };
   fetch(apiUrl, requestOptions)
     .then((response) => response.json())
     .then((res) => {
       if (res.data) {
         setSuccess(true);
       } else {
         setError(true);
       }
     });
 }

 useEffect(() => {
  getRoom();
  getUsage();
  getMember();
}, []);

 return (
   <Container sx={{ marginTop: 2}} maxWidth="md">
     <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success">
         บันทึกข้อมูลสำเร็จ
       </Alert>
     </Snackbar>
     <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="error">
         บันทึกข้อมูลไม่สำเร็จ
       </Alert>
     </Snackbar>
     <Paper sx={{ padding: 2, color: "text.secondary" }}>
       <Box display="flex">
         <Box flexGrow={1}>
           <Typography
             component="h2"
             variant="h6"
             color="primary"
             gutterBottom
           >
             บันทึกการจองใช้ห้อง
           </Typography>
         </Box>
       </Box>
       <Divider />
       <Grid container spacing={3} sx={{ flexGrow: 1}}>
         <Grid item xs={6}>
           <p>First Name</p>
           <FormControl fullWidth variant="outlined">
             <TextField
               id="FirstName"
               disabled
               variant="outlined"
               type="string"
               size="medium"
               value={member?.FirstName || ""}
               onChange={handleInputChange}
             />
           </FormControl>
         </Grid>
         <Grid item xs={6}>
           <FormControl fullWidth variant="outlined">
             <p>Last Name</p>
             <TextField
               id="LastName"
               disabled
               variant="outlined"
               type="string"
               size="medium"
               value={member?.LastName || ""}
               onChange={handleInputChange}
             />
           </FormControl>
         </Grid>
         <Grid item xs={12}>
         <FormControl fullWidth variant="outlined">
              <p>Room</p>
              <Select
                value={booking.RoomID}
                onChange={handleChange}
                inputProps={{
                  name: "RoomID",
                }}
              >
                <MenuItem aria-label="None" value="">
                  กรุณาเลือกห้อง
                </MenuItem>
                {room.map((item: RoomInterface) => (
                  <MenuItem value={item.ID} key={item.ID}>
                    {item.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
         </Grid>
         <Grid item xs={6}>
         <FormControl fullWidth variant="outlined">
              <p>Usage</p>
              <Select
                value={booking.UsageID}
                onChange={handleChange}
                inputProps={{
                  name: "UsageID",
                }}
              >
                <MenuItem aria-label="None" value="">
                  กรุณาเลือกประเภทการใช้ห้อง
                </MenuItem>
                {usage.map((item: UsageInterface) => (
                  <MenuItem value={item.ID} key={item.ID}>
                    {item.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
         </Grid>
         <Grid item xs={3}>
           <FormControl fullWidth variant="outlined">
             <p>วันที่และเวลาที่เริ่มจองใช้ห้อง</p>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                 value={AddedTime}
                 onChange={(newValue) => handleAddedTime(newValue)}
                 minDate={new Date("2018-01-01T00:00")}
                 renderInput={(params) => <TextField {...params} />}
                 ampm = {false}
               />
             </LocalizationProvider>
           </FormControl>
         </Grid>
         <Grid item xs={3}>
           <FormControl fullWidth variant="outlined">
             <p>วันที่และเวลาที่เลิกจองใช้ห้อง</p>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                 value={AddedTime1}
                 onChange={(newValue) => handleAddedTime1(newValue)}
                 minDate={new Date("2018-01-01T00:00")}
                 renderInput={(params) => <TextField {...params} />}
                 ampm = {false}
               />
             </LocalizationProvider>
           </FormControl>
         </Grid>
         <Grid item xs={12}>
           <Button component={RouterLink} to="/bookinghistory" variant="contained">
             Back
           </Button>
           <Button
             style={{ float: "right" }}
             onClick={submit}
             variant="contained"
             color="primary"
           >
             Submit
           </Button>
         </Grid>
       </Grid>
     </Paper>
   </Container>
 );
}
export default BookingCreate;