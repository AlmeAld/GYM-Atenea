import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Reclamos from "./Reclamos";
import "./reclamosContainer.scss";

function ReclamosContainer() {
  return (
    <MainLayout>
      <div>
        <Reclamos />
      </div>
    </MainLayout>
  );
}

export default ReclamosContainer;
