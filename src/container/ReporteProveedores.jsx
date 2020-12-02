import React, { useState } from "react";
import "./reporteProveedores.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TableReclamo from "../components/TablaProveedores";
import Button from "@material-ui/core/Button";
import calificacionIcon from "../assets/icons/calificacionIcon.svg";

function RecoDetails() {
  const [calification, setCalification] = useState("Todos");
  const [giroComercial, setGiroComercial] = useState("Todos");

  function handleCalification(e) {
    e.preventDefault();
    setCalification(e.currentTarget.value);
  }
  function handleSelect(e) {
    e.preventDefault();
    setGiroComercial(e.currentTarget.value);
  }
  function handleSubmit(e) {
    alert(`valor capturado ${calification}`);
    e.preventDefault();
  }

  return (
    <div className="content-filter-reporte">
      <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
        <select
          value={calification}
          onChange={handleCalification}
          className="select-category"
        >
          <option value="Calificacion" className="option-category">
            Calificacion
          </option>
          <option value="Inhabilitado" className="option-category">
            Todos
          </option>
          <option value="Inhabilitado" className="option-category">
            Inhabilitado
          </option>
          <option value="En observacion" className="option-category">
            En observacion
          </option>
          <option value="Habilitado" className="option-category">
            Habilitado
          </option>
        </select>
      </form>
      <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
        <select
          value={giroComercial}
          onChange={handleSelect}
          className="select-category"
        >
          <option value="Calificacion" className="option-category">
            Giro Comercial
          </option>
          <option value="Inhabilitado" className="option-category">
            Todos
          </option>
          <option value="En observacion" className="option-category">
            suministros
          </option>
          <option value="Habilitado" className="option-category">
            Servicios
          </option>
          <option value="Habilitado" className="option-category">
            Alimentación
          </option>
          <option value="Habilitado" className="option-category">
            Combustible
          </option>
        </select>
      </form>
    </div>
  );
}

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
    marginLeft: 40,
    width: 1100,
    marginTop: 20,
  },
}));

const buttonStylePurple = makeStyles((theme) => ({
  button: {
    marginTop: -8,
    width: 256,
    height: 40,
    background: "#6E3CD2",
    // marginLeft: 600,
    // marginBottom: 20,
  },
}));

function Reportesproveedores() {
  const classesButtonPurple = buttonStylePurple();
  const classesGrid = gridStyles();
  return (
    <>
      <div className={classesGrid.root}>
        <Grid container>
          <Grid item>
            <div className="texto">
              {" "}
              <div>
                <RecoDetails />
              </div>{" "}
              <div>
                <img src={calificacionIcon} alt="" />
              </div>
            </div>
            <div className="boxesReporte">
              <TableReclamo />
            </div>
            <div className="content-button">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classesButtonPurple.button}
              >
                Descarga PDF
              </Button>
            </div>
          </Grid>

          {/* <Grid item md={1}></Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default Reportesproveedores;
