// import React from "react";
// import LoginLayout from "../components/layout/LoginLayout"
// import "./loginContainer.scss";

// function LoginContainer() {
//   return <div className="prueba">
//   <LoginLayout />
//   </div>;
// }

// export default LoginContainer;

import React, { useState } from "react";
import fire from "../firebase.js";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Box,
  InputAdornment,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
import Lock from "@material-ui/icons/LockOutlined";
import photo from "../assets/photo.png";
import logo from "../assets/logo.png";

// material styles
const useStyles = makeStyles((theme) => ({
  cajaInput: {
    backgroundColor: theme.palette.background.paper,
    spacing: 8,
    // boxShadow: theme.shadows[5],
    boxSizing: "border-box",
    padding: "30px",
    width: "410px",
    height: "400px",
  },
  input: {
    width: "350",
    marginBottom: "20px",
    margintLeft: "auto",
  },
}));

function Login() {
  const history = useHistory();
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [activeUser, setActiveUser] = useState(false);

  console.log(email, password);

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  // const clearError = () => {
  //   setPasswordError("");
  //   setEmailError("");
  // };

  // firebase functions
  function HandleLogin(event) {
    event.preventDefault();
    // clearError();
    // fire
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     console.log(res);
    //     history.push("/Resumen");
    //   })
    //   .catch((error) => {
    //     switch (error.code) {
    //       case "auth/invalid-email":
    //       case "auth/user-disabled":
    //       case "auth/user-not-found":
    //         setEmailError(error.message);
    //         break;
    //       case "auth/wrong-password":
    //         setPassword(error.message);
    //         break;
    //       default:
    //         console.log(error);
    //     }
    //   });

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("user", email);
        console.log(res);
        history.push("/resumen");
      })
      .catch((err) => console.log(err));
  }

  // const SignOut = () => {
  //   fire
  //     .auth()
  //     .signOut()
  //     .then(function () {
  //       // Sign-out successful.
  //     })
  //     .catch(function (error) {
  //       // An error happened.
  //     });
  // };

  const styles = useStyles();

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          sm={6}
          style={{
            borderRight: "2px solid lightgray",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              zIndex: "1000",
              width: "150px",
              position: "absolute",
              marginTop: "50px",
              marginLeft: "50px",
            }}
          />
          <img
            src={photo}
            alt="img"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: "-1000",
            }}
          />
        </Grid>
        <Grid
          container
          justify="space-between"
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
        >
          <div />
          <Box m={20} className={styles.cajaInput}>
            {/* <h1 id="title">{}</h1> */}
            <p>Ingresa tu usuario y contraseña de red</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                marginBottom: "15px",
              }}
            >
              <TextField
                m={2}
                className={styles.input}
                id="filled-txt-input"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <span>{emailError}</span> */}
              <TextField
                className={styles.input}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <span>{passwordError}</span> */}
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={HandleLogin}>
                Iniciar Sesión
              </Button>
              <p>
                Olvidaste tu contraseña
                <span
                  style={{ color: "#3f51b5", cursor: "pointer" }}
                  onClick={() => setActiveUser(!activeUser)}
                >
                  recuperar contraseña
                </span>
              </p>
            </div>
          </Box>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
