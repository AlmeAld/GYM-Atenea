import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import download from "../assets/icons/download.svg";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Company from '../assets/icons/company.svg'
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from "@material-ui/core/Grid";
import './proveedoresContent.scss'
import MyDocument from './MyDocument';

//import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
 





export default function FixedContainer() {
    
  //const App = () => (
  //  <PDFViewer>
  //    <MyDocument />
  //  </PDFViewer>
  //);
  //ReactPDF.render(<MyDocument />, `${...}/example.pdf`);
  //ReactDOM.render(<App/>);

  return (
    <React.Fragment>
      <Box className="content">
        <Box className="Header">
            <img src={Company} alt="" className="avatar"/>
            <div className="prov-title">
                <h2>AGROMIN SAC</h2>
                <h3>RUC 20549652101</h3>
            </div>
        </Box>
        <Box className="body">
        <Grid container spacing={4} >
  <Grid container item md={6} direction="column" >
  <label htmlFor="name">Giro comercial    </label>
    <TextField 
     disabled
          id="outlined-disabled"
          defaultValue="Suministros"
          variant="outlined"
    
     />
  
     <label htmlFor="name">Tipo de proveedor  </label>
    <TextField 
     disabled
          id="outlined-disabled"
          defaultValue="Esencial"
          variant="outlined"
    
     />
     <label htmlFor="name">Proyecto  </label>
    <TextField 
     disabled
          id="outlined-disabled"
          defaultValue="Nombre de proyecto"
          variant="outlined"
    
     />
     <label htmlFor="name">Oficina principal  </label>
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
    <label htmlFor="name">Tipo de reclamo </label>
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
  <Grid container item md={6} direction="column" >
  <label htmlFor="name">Estado </label>
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
<Button
                variant="contained"
                color="default"
              >
              Descargar Contrato
                <img src={download} alt="" />
              </Button>
              <label htmlFor="name">""</label>
              <Button
                variant="contained"
                color="default"
              >
                Descargar antecedentes
                <img src={download} alt="" />
              </Button>
              <label htmlFor="name">""</label>
              <Button id="descargar"
                variant="contained"
              >
                Descargar PDF
              </Button>
              <div id='archivo'></div>
  </Grid>
</Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}