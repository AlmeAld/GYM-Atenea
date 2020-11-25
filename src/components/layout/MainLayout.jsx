import { Container } from "@material-ui/core";
import React from "react";

function MainLayout({ children }) {
  return (
    <main>
      MainLayout
      <Container>{children}</Container>
    </main>
  );
}

export default MainLayout;
