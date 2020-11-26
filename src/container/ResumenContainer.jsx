import React from "react";
import MainLayout from "../components/layout/MainLayout";
import "./resumenContainer.scss";
import DashboardContent from "../components/DashboardContent";
import ResumenCard from "../components/ResumenCard";

function ResumenContainer() {
  return (
    <MainLayout>
      <div className="container">
        <DashboardContent />
        <ResumenCard />
      </div>
    </MainLayout>
  );
}

export default ResumenContainer;
