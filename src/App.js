import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import fire from "./firebase";
import LoginContainer from "./container/LoginContainer";
import Comunicaciones from "./container/Comunicaciones";
import IngresoReclamo from "./container/IngresoReclamo";
import Proveedores from "./container/Proveedores";
import Reportesproveedores from "./container/ReporteProveedores";
import ReclamosContainer from "./container/ReclamosContainer";
import ResumenContainer from "./container/ResumenContainer";
import SeguimientoReclamoUser from "./container/SeguimientoReclamoUser";
import SeguimientoReclamoContainer from "./container/SeguimientoReclamoContainer";

// import Archivo from "./container/ArchivoPDF";
import Loader from "./components/Loader";

import "./App.css";
import MainLayout from "./components/layout/MainLayout";
// import LoginLayout from "./components/layout/MainLayout";

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
        return <Redirect to="/Resumen" />;
      }}
    />
  );
}

function App() {
  // este estado es para saber si el usuario inició sesión o no y de acuerdo a eso lo va a redireccionar segun la ruta que corresponda
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        console.log("logeado");
      } else {
        setIsUserLoggedIn(false);
        console.log("no esta logeado");
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Switch>
        <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/">
          <LoginContainer />
        </NonLoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/Resumen">
          <ResumenContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/IngresoReclamos">
          <IngresoReclamo />
        </LoggedInRoute>
        <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          exact
          path="/SeguimientosReclamos:id"
        >
          <SeguimientoReclamoUser />
        </LoggedInRoute>
        <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          exact
          path="/SeguimientosReclamos"
        >
          <SeguimientoReclamoContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/Proveedores">
          <Proveedores />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/Comunicaciones">
          <Comunicaciones />
        </LoggedInRoute>
        <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          path="/ComunicacionesRevisar"
        >
          <Comunicaciones />
        </LoggedInRoute>
        <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          path="/ReportesProveedores"
        >
          <Reportesproveedores />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/Reclamos">
          <ReclamosContainer />
        </LoggedInRoute>
        {/* <LoggedInRoute path="/Archivo">
          <Archivo />
        </LoggedInRoute> */}
        {/* <Route path="/GestorDocumental" component={LoginContainer}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
