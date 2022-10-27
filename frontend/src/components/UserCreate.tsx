import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import { PrefixesInterface } from "../models/IUser";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { UsersInterface } from "../models/IUser";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Icon } from "@mui/material";
import { EmployeesInterface } from "../models/IUser";
import { GendersInterface } from "../models/IUser";
import { ProvincesInterface } from "../models/IUser";
import Users from "./Users";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function UserCreate() {

  
  const [prefixes, setPrefixes] = React.useState<PrefixesInterface[]>([])
  const [employee, setEmployee] = React.useState<Partial<EmployeesInterface>>({
    First_Name: "", Last_Name: ""
  })
  const [genders, setGenders] = React.useState<GendersInterface[]>([])
  const [provinces, setProvinces] = React.useState<ProvincesInterface[]>([])

  const [user, setUser] = React.useState<Partial<UsersInterface>>({
    ProvinceID: 0, NamePrefixID: 0, EmployeeID: 0, GenderID: 0, BirthDay: new Date(),
    FirstName: "", LastName: "", Email: "", Password: "", Identification: "", Mobile: "",
    Address: "",
  });
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    if (success === true) {
      window.location.href = "/user";
    }
    setSuccess(false);
    setError(false);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const name = event.target.name as keyof typeof UserCreate;
    const { value } = event.target;
    setUser({ ...user, [name]: value });
  }

  
  const handleInputChange = (event: React.ChangeEvent<{ id?: string; value: any }>) => {
    const id = event.target.id as keyof typeof UserCreate;
    const { value } = event.target;
    setUser({ ...user, [id]: value });
  };

  const getPrefix = async () => {
    const apiUrl = "http://localhost:8080/nameprefixes";
    const requestOptions = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    };

    

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setPrefixes(res.data);  
        } else {
          console.log(res.error); 
        }
      });
  }


  const getEmployee = async () => {
    const apiUrl = `http://localhost:8080/employee/${localStorage.getItem("id")}`;
    const requestOptions = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    };


    

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.data) {
          setEmployee(res.data);   
        } else {
          console.log(res.error); 
        }
      });
  }

  const getGender = async () => {
    const apiUrl = "http://localhost:8080/genders";
    const requestOptions = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setGenders(res.data);
        } else {
          console.log(res.error);
        }
      });
  }

  const getProvince = async () => {
    const apiUrl = "http://localhost:8080/provinces";
    const requestOptions = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setProvinces(res.data);
        } else {
          console.log(res.error);
        }
      });
  }

  function submit() {

    let data = {
      FirstName: user.FirstName ?? "",
      LastName: user.LastName ?? "",
      Email: user.Email ?? "",
      Password: user.Password ?? "",
      Identification: user.Identification ?? "",
      Mobile: user.Mobile ?? "",
      Address: user.Address ?? "",
      BirthDay: user.BirthDay ?? new Date(),
      NamePrefixID: user.NamePrefixID,
      ProvinceID: user.ProvinceID,
      GenderID: user.GenderID,
      EmployeeID: employee.ID,
    };

    
    const apiUrl = "http://localhost:8080/users";
    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify(data),
    };


    
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          console.log(res.data);    
          setSuccess(true);       
          
        } else {
          setError(true);       
          console.log(res.error); 
        }
      });
  }

  
  useEffect(() => {
    getPrefix();
    getEmployee();
    getGender();
    getProvince();
  }, []);

  console.log(user);

  return (
    <Container maxWidth="md">
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          บันทึกข้อมูลสำเร็จ
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          บันทึกข้อมูลไม่สำเร็จ
        </Alert>
      </Snackbar>
      <Paper>
        <Box display="flex" sx={{ marginTop: 2, }}>
          <Box sx={{ paddingX: 2, paddingY: 1 }}>
            <Grid container spacing={2} sx={{ paddingX: 20 }}>
              <Grid item xs={3} >
                <AccountCircleSharpIcon fontSize="large" color="primary" />
              </Grid>
              <Grid item xs={9}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Create User
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Prefix</p></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Prefix</InputLabel>
              <Select
                inputProps={{
                  name: "NamePrefixID"
                }}
                value={user.NamePrefixID}
                onChange={handleSelectChange}
              >
                <MenuItem value={0}></MenuItem>
                {prefixes.map((item: PrefixesInterface) => (
                  <MenuItem key={item.ID} value={item.ID}>{item.PrefixName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>First Name</p></Grid>
          <Grid item xs={3}><TextField id="FirstName" value={user.FirstName} onChange={handleInputChange} label="First Name" variant="outlined" /></Grid>
          <Grid item xs={2} sx={{ textAlign: 'right' }}><p>Last Name</p></Grid>
          <Grid item xs={3}><TextField id="LastName" value={user.LastName} onChange={handleInputChange} label="Last Name" variant="outlined" /></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Date of Birth</p></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={user.BirthDay}
                  onChange={(newValue) => {
                    setUser({ ...user, BirthDay: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Identification Number</p></Grid>
          <Grid item xs={3}><TextField id="Identification" value={user.Identification} onChange={handleInputChange} label="Identification Number" variant="outlined" /></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Email</p></Grid>
          <Grid item xs={3}><TextField id="Email" value={user.Email} onChange={handleInputChange} label="Email" variant="outlined" /></Grid>
          <Grid item xs={2} sx={{ textAlign: 'right' }}><p>Password</p></Grid>
          <Grid item xs={3}><TextField id="Password" value={user.Password} type="password" onChange={handleInputChange} label="Password" variant="outlined" /></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Gender</p></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select inputProps={{ name: "GenderID" }} value={user.GenderID} onChange={handleSelectChange}>
                <MenuItem value={0}></MenuItem>
                {genders.map((item: GendersInterface) => (
                  <MenuItem key={item.ID} value={item.ID}>{item.GenderName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Mobile</p></Grid>
          <Grid item xs={3}><TextField id="Mobile" value={user.Mobile} onChange={handleInputChange} label="Mobile" variant="outlined" /></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Address</p></Grid>
          <Grid item xs={3}><TextField id="Address" value={user.Address} onChange={handleInputChange} label="Address" variant="outlined" /></Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Province</p></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Province</InputLabel>
              <Select inputProps={{ name: "ProvinceID" }} value={user.ProvinceID} onChange={handleSelectChange}>
                <MenuItem value={0}></MenuItem>
                {provinces.map((item: ProvincesInterface) => (
                  <MenuItem key={item.ID} value={item.ID}>{item.ProvinceName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={3} sx={{ textAlign: 'right' }}><p>Employee</p></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField disabled label="Employee" value={`${employee?.First_Name}  ${employee?.Last_Name}`}></TextField>
            </FormControl>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={5} sx={{ textAlign: 'right', marginTop: 2, paddingX: 4, paddingY: 1, marginBottom: 2 }}>
            <Button
              onClick={submit}
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default UserCreate;