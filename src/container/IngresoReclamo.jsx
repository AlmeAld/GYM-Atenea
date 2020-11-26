import React from "react";
import download from "../assets/icons/download.svg";
import "./ingresoReclamo.scss";
import MainLayout from "../components/layout/MainLayout";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const buttonStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 400,
  },
}));
const buttonStylePurple = makeStyles((theme) => ({
  button: {
    marginTop: 400,
    width: 256,
    height:40,
    background: "#6E3CD2",
    marginLeft: 150,
  },
}));

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 31,
    marginLeft: 100,
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
              >
                Cargar Contrato
                <img src={download} alt="" />
              </Button>

              <Button
                variant="contained"
                color="default"
                className={classesButton.button}
              >
                Cargar antecedentes
                <img src={download} alt="" />
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classesButtonPurple.button}
              >
                Guardar
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}

export default IngresoReclamo;
