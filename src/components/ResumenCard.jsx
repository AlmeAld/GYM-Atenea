import { Card, Container, Grid } from "@material-ui/core";
import React from "react";
import message from "../assets/icons/message.svg";
import update from "../assets/icons/update.svg";
import "./resumenCard.scss";

function ResumenCard() {
  return (
    <Container className="content-resumen">
      <Grid container spacing={2} justify={"space-around"}>
        <Grid item>
          <Card>
            <div className="card-header">
              <img src={message} alt="" />
              <span className="update-title">Últimas comunicaciones</span>
              <p className="count">+3</p>
            </div>
            <div className="details">
              <p className="date">22/11/2020</p>
              <p className="text">Reclamo pronto pago 'empresa'</p>
            </div>
            <div className="details">
              <p className="date">18/11/2020</p>
              <p className="text">Reclamo incumplimiento 'empresa'</p>
            </div>
            <div className="details">
              <p className="date">17/11/2020</p>
              <p className="text">Cambio de fechas Proyecto X</p>
            </div>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <div className="card-header">
              <img src={update} alt="" />
              <span className="update-title">Últimas Actualizaciones</span>
              <p className="count">+12</p>
            </div>
            <div className="details">
              <p className="date">25/11/2020</p>
              <p className="text">Nueva fecha de entrega proyecto x</p>
            </div>
            <div className="details">
              <p className="date">25/11/2020</p>
              <p className="text">Nuevo acuerdo de pago '........'</p>
            </div>
            <div>
              <p className="text">
                Revisa todas las actualizaciones en{" "}
                <span>seguimiento de reclamos</span>
              </p>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResumenCard;
