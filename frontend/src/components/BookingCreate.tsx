import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { BookingInterface, RoomInterface, UsageInterface, MemberInterface } from "../models/IUser";
import {MuiPickersUtilsProvider,KeyboardDateTimePicker,} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import { MenuItem } from '@material-ui/core';

function Alert(props: AlertProps) {
 return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
   root: {flexGrow: 1},
   container: {marginTop: theme.spacing(2)},
   paper: {padding: theme.spacing(2),color: theme.palette.text.secondary},
 })
);
function UserCreate() {
 const classes = useStyles();
 const [selectedDate, setSelectedDate] = React.useState<Date | null>(
   new Date()
 );


 const  [AddedTime,setAddedTime] = React.useState<Date>(new Date());
 const handleAddedTime = (date: Date | null) => {
  if (!date) {
    return
  }
   setAddedTime(date);
 }
 const  [AddedTime1,setAddedTime1] = React.useState<Date>(new Date());
 const handleAddedTime1 = (date: Date | null ) => {
  if (!date){
    return
  }
   setAddedTime1(date);
 }

 const [booking, setBooking] = React.useState<Partial<BookingInterface>>({});
 const [member, setMember] = React.useState<MemberInterface>();
 const [room, setRoom] = React.useState<RoomInterface[]>([]);
 const [usage, setUsage] = React.useState<UsageInterface[]>([]);
 const [success, setSuccess] = React.useState(false);
 const [error, setError] = React.useState(false);
 const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
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
  event: React.ChangeEvent<{ name?: string; value: unknown }>
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
  const apiUrl = `http://localhost:8080/member/${localStorage.getItem("id")}`;
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
   <Container className={classes.container} maxWidth="md">
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
     <Paper className={classes.paper}>
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
       <Grid container spacing={3} className={classes.root}>
         <Grid item xs={6}>
           <p>First Name</p>
           <FormControl fullWidth variant="outlined">
             <TextField
               id="FirstName"
               disabled
               variant="outlined"
               type="string"
               size="medium"
               value={member?.First_Name || ""}
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
               value={member?.Last_Name || ""}
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
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDateTimePicker
                 name="AddedTime"
                 value={AddedTime}
                 onChange={handleAddedTime}
                 minDate={new Date("2018-01-01T00:00")}
                 format="yyyy/MM/dd HH:mm "
                 fullWidth
                 ampm = {false}
               />
             </MuiPickersUtilsProvider>
           </FormControl>
         </Grid>
         <Grid item xs={3}>
           <FormControl fullWidth variant="outlined">
             <p>วันที่และเวลาที่เลิกจองใช้ห้อง</p>
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDateTimePicker
                 name="AddedTime1"
                 value={AddedTime1}
                 onChange={handleAddedTime1}
                 minDate={new Date("2018-01-01T00:00")}
                 format="yyyy/MM/dd HH:mm "
                 fullWidth
                 ampm = {false}
               />
             </MuiPickersUtilsProvider>
           </FormControl>
         </Grid>
         <Grid item xs={12}>
           <Button component={RouterLink} to="/history" variant="contained">
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
export default UserCreate;