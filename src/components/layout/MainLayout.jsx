import { Container } from "@material-ui/core";
import React from "react";
import "./mainLayout.scss";
import LefMenu from "../LeftMenu";
import TopBar from "../TopBar";

function MainLayout({ children }) {
  return (
    <main className="main">
      <LefMenu />
      <TopBar />
      <Container className="main-content">{children}</Container>
    </main>
  );
}

export default MainLayout;
