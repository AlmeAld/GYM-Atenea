import { Container } from "@material-ui/core";
import React from "react";
import "./mainLayout.scss";
import LefMenu from "../LeftMenu";
import TopBar from "../TopBar";

function MainLayout({ children }) {
  return (
    <main>
      <LefMenu />
      <TopBar />
      <Container>{children}</Container>
    </main>
  );
}

export default MainLayout;
