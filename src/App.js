import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginContainer from "./container/LoginContainer";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";

//esta funcion las vamos a usar cuando sepamos el nombre de las rutas
function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserLoggedIn) {
          return <MainLayout>{children}</MainLayout>;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

//esta funcion las vamos a usar cuando sepamos el nombre de las rutas
function NonLoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return <>{children}</>;
        }
        //return <Redirect to='/ruta' />
      }}
    />
  );
}

function App() {
  // este estado es para saber si el usuario inició sesión o no y de acuerdo a eso lo va a redireccionar segun la ruta que corresponda
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginContainer}></Route>
      </Switch>
    </Router>
  );
}

export default App;
