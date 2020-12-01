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
import logoMorado from "../assets/AteneaMoradoChicoV2.svg";
import "./loginContainer.scss";

// material styles
const useStyles = makeStyles({
  cajaInput: {
    spacing: 8,
    boxSizing: "border-box",
    width: "300px",
    margin: "auto",
  },
  input: {
    width: "100%",
    marginBottom: "20px",
    outline: "none",
    "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl": {
      // background: "#F4F5F4",
      width: "100%",
      // height: "40px",
      marginLeft: "0",
    },
  },
});

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  // firebase functions
  function HandleLogin(event) {
    event.preventDefault();

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

  const styles = useStyles();

  return (
    // <div>
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item sm={7}>
        <img
          src={photo}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
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
        sm={5}
        alignItems="center"
        direction="column"
        className={styles.cajaInput}
      >
        <img
          src={logoMorado}
          alt="logo Atenea"
          style={{
            width: "275px",
            marginBottom: "15px",
          }}
        />

        <Box m={20} style={{ margin: "0px", width: "300px" }}>
          <p className="title">Ingresa tu usuario y contraseña de red</p>
          <TextField
            // m={2}
            className={styles.input}
            id="filled-txt-input"
            placeholder="Email"
            type="email"
            autoComplete="off"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              marginLeft: "0px",
              startAdornment: (
                <InputAdornment>
                  <AccountCircle
                    style={{
                      color: " rgba(110, 60, 210, 1)",
                      marginRight: "8px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={styles.input}
            id="filled-password-input"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock
                    style={{
                      color: " rgba(110, 60, 210, 1)",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={HandleLogin}
              style={{
                background: " #6E3CD2",
                color: "#fff",
                width: "150px",
                height: "40px",
                fontSize: "16px",
                // marginLeft: "85px",
                marginTop: "14px",
                marginBottom: "18px",
              }}
            >
              Iniciar Sesión
            </Button>
          </div>
          <p className="password-text">
            ¿Olvidaste tu contraseña?
            <span className="span">recuperar contraseña</span>
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
