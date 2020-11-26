import React from "react";
import "./comunicaciones.scss";
import MainLayout from "../components/layout/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
    marginLeft: 40,
  },
}));
function Comunicaciones() {
  const classesGrid = gridStyles();
  return (
    <MainLayout>
      <div className="prueba">loginContainer</div>
      <div className={classesGrid.root}>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={10}>
            <div className="boxes">
            </div>
            <div className="graphicsZone">

</div>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}

export default Comunicaciones;
