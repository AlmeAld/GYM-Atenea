import React, { useState, useEffect } from 'react';
import fire from '../../firebase.js';
import {
  TextField,
  Box,
  InputAdornment,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import Lock from '@material-ui/icons/LockOutlined';

// material styles
const useStyles = makeStyles((theme) => ({
  cajaInput: {
    backgroundColor: theme.palette.background.paper,
    spacing: 8,
    // boxShadow: theme.shadows[5],
    boxSizing: 'border-box',
    padding: '30px',
    width: '410px',
    height: '400px',
  },
  input: {
    width: '350',
    marginBottom: '20px',
    margintLeft: 'auto',
  },
}));

function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeUser, setActiveUser] = useState(false);

  console.log(email, password);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearError = () => {
    setPasswordError('');
    setEmailError('');
  };

  // firebase functions
  const Login = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(error.message);
            break;
          case 'auth/wrong-password':
            setPassword(error.message);
            break;
          default:
            console.log(error);
        }
      });
  };

  const SignUp = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message);
            break;
          case 'auth/weak-password':
            setPassword(error.message);
            break;
          default:
            console.log(error);
        }
      });
  };
  const SignOut = () => {
    fire
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const listenerUserState = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };
  useEffect(() => {
    listenerUserState();
  }, []);

  const styles = useStyles();

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid
          item
          sm={6}
          style={{
            backgroundColor: '#6E3CD2',
            borderRight: '2px solid lightgray',
          }}
        >
          {/* <img src={Logo} alt="" style={{zIndex: "1000" , width:"150px", position:"absolute", marginTop: "50px",     marginLeft: "50px"}} 

          />
            <img
              src={mainImg}
              alt="img"
              style={{ width: '100%', height: '100vh', objectFit: 'cover', zIndex: "-1000"}}
            /> */}
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
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                marginBottom: '15px',
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
              <span>{emailError}</span>
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
              <span>{passwordError}</span>
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={Login}>
                Iniciar Sesión
              </Button>
              <p>
                Olvidaste tu contraseña
                <span
                  style={{ color: '#3f51b5', cursor: 'pointer' }}
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
