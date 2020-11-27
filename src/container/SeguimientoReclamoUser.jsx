import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import download from "../assets/icons/download.svg";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Company from "../assets/icons/company.svg";
import Grid from "@material-ui/core/Grid";
// import "./proveedoresContent.scss";
import firebase from "../firebase";
import Descarga from "../components/DescargarPDF";
export default function FixedContainer() {
  const { id: userid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const data = await firebase
          .firestore()
          .collection("Seguimiento-reclamos")
          .get();
        const arrayData = await data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        arrayData.forEach((item) => {
          if (item.id === userid) {
            setUser(item);
          }
        });
      } catch (error) {}
    };
    getDataUser();
  }, [userid]);

  console.log(user);

  return (
    <React.Fragment>
      <Box className="content">
        <Box className="Header">
          <img src={Company} alt="" className="avatar" />
          <div className="prov-title">
            <h2>{user.proveedor}</h2>
            <h3>RUC {user.ruc}</h3>
          </div>
        </Box>
        <Box className="body">
          <Grid container spacing={4}>
            <Grid container item md={6} direction="column">
              <label htmlFor="name">{user.giroComercial} </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Suministros"
                variant="outlined"
              />

              <label htmlFor="name">{user.tipoProveedor} </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Esencial"
                variant="outlined"
              />
              <label htmlFor="name">Proyecto </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Nombre de proyecto"
                variant="outlined"
              />
              <label htmlFor="name">Oficina principal </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Esencial"
                variant="outlined"
              />
              <label htmlFor="name">Fecha de reclamo </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="24/10/2019"
                variant="outlined"
              />
              <label htmlFor="name">{user.tipoReclamo} </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Incumplimiento de pago"
                variant="outlined"
              />
              <label htmlFor="name">Cuantia </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="US$ 23.000"
                variant="outlined"
              />
              <label htmlFor="name">Responsable </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="nombre de administrador de contrato"
                variant="outlined"
              />
            </Grid>
            <Grid container item md={6} direction="column">
              <label htmlFor="name">{user.estado} </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="en negociacion"
                variant="outlined"
              />
              <label htmlFor="name">Fecha de Estado </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="12/11/2020"
                variant="outlined"
              />
              <label htmlFor="name">Calificación</label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Por calificar"
                variant="outlined"
              />
              <label htmlFor="name">Reseña</label>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={10}
                defaultValue="El proveedor aceptó reunirse conmigo
                para llegar a un acuerdo amistoso con
                respecto a su pago pendiente. La reunión
                se llevarpa a cabo el día 23 del presente
                mes. El proveedor manifiesta que necesita
                que le armen un cronograma de pagos
                cada 15 días."
              />
              <label htmlFor="name">""</label>
              <Button variant="contained" color="default">
                Descargar Contrato
                <img src={download} alt="" />
              </Button>
              <label htmlFor="name">""</label>
              <Button variant="contained" color="default">
                Descargar antecedentes
                <img src={download} alt="" />
              </Button>
              <label htmlFor="name">""</label>
              
              <div className="boxBotton">
                <Descarga/>
                </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
