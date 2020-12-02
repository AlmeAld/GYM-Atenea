import React from "react";
import "./reclamos.scss";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import resumenCuadro from "../assets/resumenCuadro.svg";
import arrowRightPurple from "../assets/icons/arrow-right-purple.svg";
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";

// const gridStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 31,
//     marginLeft: 40,
//   },
// }));
function Reclamos() {
  // const classesGrid = gridStyles();
  return (
    <Grid container>
      {/* <Grid item> */}
      <div className="cards-content">
        <div className="card-purple">
          <p className="title-card">Últimos reclamos ingresados</p>
          <div className="card-main">
            <p> 25/11/2020 - Incumplimiento de pago </p>
            <p> 25/11/2020 - Ampliación de fechas </p>
            <p> 24/11/2020 - Incumplimiento de pago </p>
          </div>
          <p className="small">
            Ver más
            <img
              src={arrowRightWhite}
              alt="icono de flecha a la derecha"
              className="icon-arrow"
            />
          </p>
        </div>
        <div className="card-darkGray">
          <p className="title-card">Reclamos Concluidos</p>
          <div className="card-main">
            <p> Almacenes Generales S.A. </p>
            <p> Uniformes Merino y Hnos </p>
            <p> Manufacturas Campos EIRL </p>
          </div>
          <p className="small">
            Ver más
            <img
              src={arrowRightWhite}
              alt="icono de flecha a la derecha"
              className="icon-arrow"
            />
          </p>
        </div>
        <div className="card-gray">
          <p className="title-card">Proveedores en luz roja</p>
          <div className="card-main">
            <p> Servicios Generales Yacsa </p>
            <p> Iluminaciones Castillo SA </p>
            <p> Comunicaciones IBSA SA </p>
          </div>
          <p className="small">
            Ver más
            <img
              src={arrowRightPurple}
              alt="icono de flecha a la derecha"
              className="icon-arrow"
            />
          </p>
        </div>
      </div>
      <div className="graphicsZone">
        <img src={resumenCuadro} alt="cuadro gráfico de resumen" />
      </div>
      {/* </Grid> */}
    </Grid>
  );
}

export default Reclamos;
