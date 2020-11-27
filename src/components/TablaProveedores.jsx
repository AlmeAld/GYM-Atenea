import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import { listenAllDocs } from "../API/crud";
import user from "../assets/icons/user.svg";
import "./tablaProveedores.scss";
// import Badge from "./Badge";
// import "./ClientTable.scss";
// import headerColumn from "../API/headerTable";


function TableReclamo() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);

  const headerColumn = [
    {
      id: "01",
      label: "Editar calif",
    },
    {
      id: "02",
      label: "Razón Social",
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
      label: "Calificación",
    },
    
  ];

  return (
    <>

      <div className="filterZone">
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
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1667 2.68926C14.3856 2.47039 14.6454 2.29677 14.9314 2.17832C15.2173 2.05987 15.5238 1.9989 15.8334 1.9989C16.1429 1.9989 16.4494 2.05987 16.7353 2.17832C17.0213 2.29677 17.2812 2.47039 17.5 2.68926C17.7189 2.90813 17.8925 3.16796 18.011 3.45393C18.1294 3.7399 18.1904 4.0464 18.1904 4.35592C18.1904 4.66545 18.1294 4.97195 18.011 5.25792C17.8925 5.54388 17.7189 5.80372 17.5 6.02259L6.25002 17.2726L1.66669 18.5226L2.91669 13.9393L14.1667 2.68926Z" stroke="#9D7EDB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </TableCell>
                <TableCell>
                        {row.proveedor}
                </TableCell>
                <TableCell>{row.giroComercial}</TableCell>
                <TableCell>{row.ruc}</TableCell>
                <TableCell>{row.tipoProveedor}</TableCell>
                <TableCell>{row.calificacion}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </>
  );
}
export default TableReclamo;
