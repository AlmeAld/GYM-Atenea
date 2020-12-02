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
import user from "../assets/icons/user.svg";
import "./tableReclamo.scss";
// import Badge from "./Badge";
// import "./ClientTable.scss";
// import headerColumn from "../API/headerTable";

function RecoDetails(props) {
  const [estado, setEstado] = useState("Estado");
  const [tipoReclamo, setTipoReclamo] = useState("Tipo de reclamo");
  const [fechaReclamo, setFechaReclamo] = useState("Fecha de reclamo");

  function handleSelectEstado(e) {
    e.preventDefault();
    setEstado(e.currentTarget.value);
  }
  function handleSelectTipoReclamo(e) {
    e.preventDefault();
    setTipoReclamo(e.currentTarget.value);
  }
  function handleSelectFechaReclamo(e) {
    e.preventDefault();
    setFechaReclamo(e.currentTarget.value);
  }
  function handleSubmit(e) {
    alert(`valor capturado ${estado}`);
    e.preventDefault();
  }

  return (
    <div className="content-filter">
      <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
        <select
          value={estado}
          onChange={handleSelectEstado}
          className="select-category"
        >
          <option value="Todos" className="option-category">
            Estado
          </option>
          <option value="Todos" className="option-category">
            Todos
          </option>
          <option value="Recibido" className="option-category">
            Recibido
          </option>
          <option value="Encontestación" className="option-category">
            En contestación
          </option>
          <option value="Ennegociación" className="option-category">
            En negociación
          </option>
          <option value="Enarbitraje" className="option-category">
            En arbitraje
          </option>
          <option value="Enprocesojudicial" className="option-category">
            En proceso judicial
          </option>
          <option value="Concluido" className="option-category">
            Concluido
          </option>
        </select>
      </form>
      <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
        <select
          value={tipoReclamo}
          onChange={handleSelectTipoReclamo}
          className="select-category"
        >
          <option value="Todos" className="option-category">
            Tipo de reclamo
          </option>
          <option value="Todos" className="option-category">
            Todos
          </option>
          <option value="Adicionales" className="option-category">
            Adicionales
          </option>
          <option value="Mayorescostos" className="option-category">
            Mayores costos
          </option>
          <option value="Ampliacióndeplazos" className="option-category">
            Ampliación de plazos
          </option>
        </select>
      </form>
      <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
        <select
          value={fechaReclamo}
          onChange={handleSelectFechaReclamo}
          className="select-category"
        >
          <option value="Todos" className="option-category">
            Fecha de reclamo
          </option>
          <option value="todos" className="option-category">
            Todos
          </option>
          <option value="Enero" className="option-category">
            Enero
          </option>
          <option value="febrero" className="option-category">
            Febrero
          </option>
          <option value="marzo" className="option-category">
            Marzo
          </option>
          <option value="abril" className="option-category">
            Abril
          </option>
          <option value="mayo" className="option-category">
            Mayo
          </option>
          <option value="junio" className="option-category">
            Junio
          </option>
          <option value="julio" className="option-category">
            Julio
          </option>
          <option value="agosto" className="option-category">
            Agosto
          </option>
          <option value="setiembre" className="option-category">
            Setiembre
          </option>
          <option value="Octubre" className="option-category">
            Octubre
          </option>
          <option value="Noviembre" className="option-category">
            Noviembre
          </option>
          <option value="Diciembre" className="option-category">
            Diciembre
          </option>
        </select>
      </form>
    </div>
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
      label: "Proveedor",
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
                  {/* <TableCell> */}
                  {/* <Badge name={row.status} className={row.status} /> */}
                  {/* </TableCell> */}
                  <TableCell>
                    <button type="button" className="edit">
                      <img src={row.imgURL} alt="" />
                    </button>
                  </TableCell>
                  <TableCell>
                    <Link to={`/SeguimientosReclamos${row.id}`}>
                      <button type="button" className="profile">
                        <img src={user} alt="" />
                        {row.proveedor}
                      </button>
                    </Link>
                  </TableCell>
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
      <small style={{ color: "#A7A8A9", width: "500px" }}>
        Ingrese en el ícono del proveedor para visualizar detalle del reclamo.
        Es posible editar el estado de cada reclamo desde este panel. Para una
        mejor búsqueda utilice la opción “filtrar”
      </small>
    </>
  );
}
export default TableReclamo;
