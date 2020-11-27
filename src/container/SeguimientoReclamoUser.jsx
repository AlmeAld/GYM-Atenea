import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import download from '../assets/icons/download.svg';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Company from '../assets/icons/company.svg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../components/proveedoresContent.scss';
import firebase from '../firebase';
import Descarga from '../components/DescargarPDF';
import Edit from '../assets/icons/edit.svg';
export default function FixedContainer() {
  const [disable, setDisabled] = useState(true);
  const [disableDate, setDisabledDate] = useState(true);
  const [disableCalificacion, setDisabledCalificacion] = useState(true);

  const { id: userid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const data = await firebase
          .firestore()
          .collection('Seguimiento-reclamos')
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
    <Container>
      <Box className="content">
        <Box id="Header">
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
                defaultValue="Proyecto lima"
                variant="outlined"
              />
              <label htmlFor="name">Oficina principal </label>
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Lima"
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
                defaultValue="Julio Perez"
                variant="outlined"
              />
            </Grid>
            <Grid container item md={6} direction="column">
              <div className="eje">
                <label htmlFor="name">{user.estado} </label>
                <TextField
                  disabled={disable}
                  id="outlined-disabled"
                  defaultValue="en negociacion"
                  variant="outlined"
                />
                <IconButton id="estado" aria-label="edit">
                  <img
                    id="estado"
                    className="edit-btn"
                    onClick={() => setDisabled(false)}
                    src={Edit}
                    alt=""
                  />
                </IconButton>
              </div>
              <div className="eje">
                <label htmlFor="name">Fecha de Estado </label>
                <TextField
                  disabled={disableDate}
                  id="outlined-disabled"
                  defaultValue="12/11/2020"
                  variant="outlined"
                />
                <IconButton id="estado" aria-label="edit">
                  <img
                    id="estado"
                    className="edit-btn"
                    onClick={() => setDisabledDate(false)}
                    src={Edit}
                    alt=""
                  />
                </IconButton>
              </div>
              <div className="eje">
                <label htmlFor="name">Calificación</label>
                <TextField
                  disabled={disableCalificacion}
                  id="outlined-disabled"
                  defaultValue="Por calificar"
                  variant="outlined"
                />
                <IconButton id="estado" aria-label="edit">
                  <img
                    id="estado"
                    className="edit-btn"
                    onClick={() => setDisabledCalificacion(false)}
                    src={Edit}
                    alt=""
                  />
                </IconButton>
              </div>
              <label htmlFor="name">Reseña</label>
              <TextareaAutosize
                disabled
                aria-label="minimum height"
                rowsMin={10}
                defaultValue="El proveedor aceptó reunirse conmigo para llegar a un acuerdo amistoso conrespecto a su pago pendiente. La reunión se llevarpa a cabo el día 23 del presentemes. El proveedor manifiesta que necesitaque le armen un cronograma de pagos cada 15 días."
              />
              <br />
              <Button id="down-btn" variant="contained" color="default">
                Descargar Contrato
                <img src={download} alt="" />
              </Button>
              <br />
              <Button id="down-btn" variant="contained" color="default">
                <Descarga />
                <img src={download} alt="" />
              </Button>
              <br />

              <Button id="descargar" className="boxBotton">
               Descargar vista en PDF
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
