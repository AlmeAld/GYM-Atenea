import React, { PureComponent } from "react";
import "./AreaChartResumen.scss";
import Grid from "@material-ui/core/Grid";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import alert from "../assets/icons/alert.svg";
import { Container } from "@material-ui/core";

const data = [
  {
    name: "Setiembre",
    uv: 1500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Octubre",
    uv: 4000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Noviembre",
    uv: 2800,
    pv: 9800,
    amt: 2290,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/2vyv694u/";

  render() {
    return (
      <Container>
        <Grid container spacing={2} justify={"space-around"}>
          <Grid item className="reclamo proveedores">
            <img src={alert} alt="icon alert" className="icon-alert" />
            <span className="span">Reclamos Proveedores</span>
            <p className="count">+26</p>
            <AreaChart
              width={400}
              height={150}
              data={data}
              syncId="anyId"
              // margin={{
              //   top: 10,
              //   right: 30,
              //   left: 0,
              //   bottom: 0,
              // }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </Grid>
          <Grid item className="reclamo empresa">
            <img src={alert} alt="icon alert" className="icon-alert" />
            <span className="span">Reclamos Empresa</span>
            <p className="count">+18</p>
            <AreaChart
              width={400}
              height={150}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
