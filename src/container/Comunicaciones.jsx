import React from "react";
import "./comunicaciones.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CustomizedDialogs from "../components/OpenDialog";
import TableComunicacion from "../components/TablaComunicacion";

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
    marginLeft: 40,
  },
}));
function Comunicaciones() {
  const classesGrid = gridStyles();
  return (
    <>
      <div className="prueba">loginContainer</div>
      <div className={classesGrid.root}>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={10}>
            <TableComunicacion />
          </Grid>
          <Grid item md={1}>
            <a href=""> Ir Teams</a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Comunicaciones;
