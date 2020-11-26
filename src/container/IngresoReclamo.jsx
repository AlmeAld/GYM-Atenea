import React from "react";
import "./ingresoReclamo.scss";
import MainLayout from "../components/layout/MainLayout";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import StarBorder from "@material-ui/icons/StarBorder";

import Collapse from "@material-ui/core/Collapse";
//import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
//import StarBorder from '@material-ui/icons/StarBorder';

const buttonStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 400,
  },
}));
const buttonStylePurple = makeStyles((theme) => ({
  button: {
    marginTop: 400,
    width: 400,
    background: "#6E3CD2",
  },
}));

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
  },
}));

const botonesBarraStyle = makeStyles((theme) => ({
  button: {
    width: 200,
    background: "#E5E5E5",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 30,
    margin: 18,
  },
});
const textArea = makeStyles({
  root: {
    width: 400,
    height: 300,
    marginTop: 80,
  },
});

function IngresoReclamo() {
  const classesGrid = gridStyles();
  const classes = useStyles();
  const classesDos = textArea();
  const classesButton = buttonStyle();
  const classesButtonPurple = buttonStylePurple();
  const botonesBarra = botonesBarraStyle();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MainLayout>
      <div className={classesGrid.root}>
        <Grid container>
          <div className="barra">
            <h1>Ingreso de Datos </h1>
          </div>
          <Grid item md={6}>
            <form>
              <div>
                <h3> 1. Proveedor</h3>

                <TextField
                  id="filled-password-input"
                  label="Razón Social"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="RUC"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Giro Comercial"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Tipo de Proveedor"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />
              </div>
              <div>
                <h3> 2. Proyecto</h3>

                <TextField
                  id="filled-password-input"
                  label="Oficina Principal"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Fecha de reclamo"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Tipo de reclamo"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Estado"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Fecha Estado"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />

                <TextField
                  id="filled-password-input"
                  label="Monto"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.root}
                />
              </div>
            </form>
          </Grid>

          <Grid item md={6}>
            <div>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={10}
                placeholder="Resumen reclamo"
                className={classesDos.root}
              />
              <Button
                variant="contained"
                color="default"
                className={classesButton.button}
                startIcon={<CloudUploadIcon />}
              >
                Cargar Contrato
              </Button>

              <Button
                variant="contained"
                color="default"
                className={classesButton.button}
                startIcon={<CloudUploadIcon />}
              >
                Cargar antecedentes
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classesButtonPurple.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}

export default IngresoReclamo;
