import React from "react";
import MainLayout from "../components/layout/MainLayout"
import ProveedoresContent from "../components/ProveedoresContent"
import "./proveedores.scss";

function Proveedores() {
  return (
  <MainLayout>
  <div className="container">
    <ProveedoresContent />
  </div>
</MainLayout>)
}

export default Proveedores;