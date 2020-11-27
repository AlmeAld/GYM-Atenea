import React from "react";
import "./resumenContainer.scss";
import DashboardContent from "../components/DashboardContent";
import ResumenCard from "../components/ResumenCard";

function ResumenContainer() {
  return (
    <div className="container">
      <DashboardContent />
      <ResumenCard />
    </div>
  );
}

export default ResumenContainer;
