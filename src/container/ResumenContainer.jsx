import React from "react";
import MainLayout from "../components/layout/MainLayout";
import "./resumenContainer.scss";
import DashboardContent from "../components/DashboardContent";
import ResumenCard from "../components/ResumenCard";

function ResumenContainer() {
  return (
    <MainLayout className="prueba">
      <p>ResumenContainer</p>
      <DashboardContent />
      <ResumenCard />
    </MainLayout>
  );
}

export default ResumenContainer;
