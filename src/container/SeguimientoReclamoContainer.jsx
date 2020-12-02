import React from "react";
import "./seguimientoReclamos.scss";
import TableReclamo from "../components/TableReclamo";
import SideBar from "../components/SideBar";

function SeguimientoReclamoContainer() {
  return (
    <div className="content-table">
      <SideBar />
      <TableReclamo />
    </div>
  );
}

export default SeguimientoReclamoContainer;
