import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { SigninInterface } from "../models/ISignin";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function SignIn() {
  
  const [signin, setSignin] = useState<Partial<SigninInterface>>({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const login = () => {
    const apiUrl = "http://localhost:8080/login/user";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setSuccess(true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("user", res.data.role);
          window.location.reload()
        } else {
          setError(true);
        }
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: any }>
  ) => {
    const id = event.target.id as keyof typeof signin;
    const { value } = event.target;
    setSignin({ ...signin, [id]: value });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          เข้าสู่ระบบสำเร็จ
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          อีเมลหรือรหัสผ่านไม่ถูกต้อง
        </Alert>
      </Snackbar>
      <CssBaseline />
      <div style={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Avatar sx={{ margin: 1, backgroundColor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in

        </Typography>
        *username:ADD@gmail.com, password:123456*
        <form style={{ width: "100%", marginTop: 1 }} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Email"
            label="Email Address"
            name="Email"
            autoComplete="email"
            autoFocus
            value={signin.Email || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="Password"
            autoComplete="current-password"
            value={signin.Password || ""}
            onChange={handleInputChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 0 }}
            onClick={login}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;