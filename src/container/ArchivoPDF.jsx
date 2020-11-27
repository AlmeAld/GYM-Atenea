import React from "react";
import MainLayout from "../components/layout/MainLayout";
import MyDocument from "../components/MyDocument";
//import ReactDOM from 'react-dom';
//import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from "@react-pdf/renderer";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core/styles";

const buttonStylePurple = makeStyles((theme) => ({
  button: {
    width: 256,
    height: 40,
    background: "#6E3CD2",
    marginLeft: 150,
  },
}));

//ReactPDF.render(<MyDocument/>)

/*           const App = () => (
                <div>
                <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
                </div>
            )*/
function Archivo() {
  const classesButton = buttonStylePurple();

  return (
    <MainLayout>
      <div className="container">
        <MyDocument />
        <div className={classesButton.button}>
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </MainLayout>
  );
}

export default Archivo;
