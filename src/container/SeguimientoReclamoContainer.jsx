import React from "react";
import "./seguimientoReclamos.scss";
import Mainlayout from "../components/layout/MainLayout";
import TableReclamo from "../components/TableReclamo";

function SeguimientoReclamo() {
  return (
    <Mainlayout>
      <div className="content-table">
        <TableReclamo />
      </div>
    </Mainlayout>
  );
}

export default SeguimientoReclamo;
