import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./sidebar.scss";

function SideBar() {
  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 320,
  //     backgroundColor: "#E5E5E5",
  //   },
  //   // selectEmpty: {
  //   //   marginTop: theme.spacing(2),
  //   // },
  // }));
  // const classes = useStyles();

  const [category, setCategory] = React.useState("Categoría");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function handleSubmit(e) {
    alert(`valor capturado ${category}`);
    e.preventDefault();
  }

  return (
    <div className="content-sideBar">
      <h1>Seguimiento Reclamo</h1>
      {/* <div> */}
      {/* <FormControl variant="filled" className={classes.formControl}>
          <InputLabel
            disableAnimation="true"
            // id="demo-simple-select-filled-label"
            // style={{ color: "#000", top: "-7px", left: "-2px" }}
          >
            Categoría
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value={10}>Proveedor --- GYM</MenuItem>
            <MenuItem value={20}>GYM --- Proveedor</MenuItem>
          </Select>
        </FormControl> */}
      {/* </div> */}
      <form onSubmit={handleSubmit}>
        <select
          value={category}
          onChange={handleChange}
          className="select-category"
        >
          <option value="categoria" className="option-category">
            Categoria
          </option>
          <option value="todos" className="option-category">
            Todos
          </option>
          <option value="proveedor-gym" className="option-category">
            Proveedor --- GYM
          </option>
          <option value="gym-proveedor" className="option-category">
            GYM --- Proveedor
          </option>
        </select>
      </form>
    </div>
  );
}

export default SideBar;
