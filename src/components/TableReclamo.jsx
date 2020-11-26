import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import { listenAllDocs } from "../API/crud";
// import Badge from "./Badge";
// import "./ClientTable.scss";
// import headerColumn from "../API/headerTable";

function RecoDetails() {
  const [empresa, setEmpresa] = useState("Todos");

  function handleSelect(e) {
    e.preventDefault();
    setEmpresa(e.currentTarget.value);
  }
  function handleSubmit(e) {
    alert(`valor capturado ${empresa}`);
    e.preventDefault();
  }

  return (
    <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
      <select value={empresa} onChange={handleSelect}>
        <option value="Todos">Filtrar por</option>
        <option value="Empresa-B1">Estado</option>
        <option value="Empresa-B2">Tipo de reclamo</option>
        <option value="Empresa-B3">Fecha de reclamo</option>
      </select>
    </form>
  );
}

function TableReclamo() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);

  const headerColumn = [
    {
      id: "01",
      label: "Editar Estado",
    },
    {
      id: "02",
      label: "Prov",
    },
    {
      id: "03",
      label: "Giro Comercial",
    },
    {
      id: "04",
      label: "RUC",
    },
    {
      id: "05",
      label: "Tipo de prov.",
    },
    {
      id: "06",
      label: "Tipo de Reclamo",
    },
    {
      id: "07",
      label: "Estado",
    },
  ];

  return (
    <>
      <RecoDetails />
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headerColumn.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {/* <Badge name={row.status} className={row.status} /> */}
                  </TableCell>
                  <TableCell>{row.proveedor}</TableCell>
                  <TableCell>{row.giroComercial}</TableCell>
                  <TableCell>{row.ruc}</TableCell>
                  <TableCell>{row.tipoProveedor}</TableCell>
                  <TableCell>{row.tipoReclamo}</TableCell>
                  <TableCell>{row.estado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
export default TableReclamo;

{
  /* <TableCell>
                    <Link to={`/cliente/recomendaciones:${row.id}`}>
                      <button type="button" className="ver-mas">
                        Ver más
                      </button>
                    </Link>
                  </TableCell> */
}
