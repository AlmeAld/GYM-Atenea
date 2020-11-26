import React from "react";
import "./reportesGYM.scss";
import MainLayout from "../components/layout/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
    marginLeft: 100
  },
}));
function ReportesGYM() {

  const classesGrid = gridStyles();
  return (
    <MainLayout>
      <div className="prueba">loginContainer</div>
      <div className={classesGrid.root}>
        <Grid container>

        </Grid>
        </div>
  </MainLayout>
  );

}

export default ReportesGYM;