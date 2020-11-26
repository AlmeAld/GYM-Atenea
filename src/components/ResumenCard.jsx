import { Card, Container, Grid } from "@material-ui/core";
import React from "react";
import message from "../assets/icons/message.svg";
import "./resumenCard.scss";

function ResumenCard() {
  return (
    <Container>
      <Grid container spacing={2} justify={"space-around"}>
        <Grid item>
          <Card>
            <div>
              <img src={message} alt="" />
              <span>Últimas comunicaciones</span>
              <p>+3</p>
            </div>
            <div className="details">
              <p className="date">22/11/2020</p>
              <p>Reclamo pronto pago 'empresa'</p>
            </div>
            <div className="details">
              <p className="date">18/11/2020</p>
              <p>Reclamo incumplimiento 'empresa'</p>
            </div>
            <div className="details">
              <p className="date">17/11/2020</p>
              <p>Cambio de fechas Proyecto X</p>
            </div>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <div>
              <img src={message} alt="" />
              <span>Últimas Actualizaciones</span>
              <p>+12</p>
            </div>
            <div className="details">
              <p className="date">25/11/2020</p>
              <p>Nueva fecha de entrega proyecto x</p>
            </div>
            <div className="details">
              <p className="date">25/11/2020</p>
              <p>Nuevo acuerdo de pago '........'</p>
            </div>
            <div>
              <p>
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
