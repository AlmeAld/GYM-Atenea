/* import React from "react";
import MainLayout from "../components/layout/MainLayout"
import MyDocument from "../components/MyDocument"
//import ReactDOM from 'react-dom';
//import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

ReactPDF.render(<MyDocument/>)

const App = () => (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
function Archivo() {
    return (<MainLayout>
    <div className="container">
      <MyDocument />
    </div>
  </MainLayout>)
  }

  export default Archivo */ 