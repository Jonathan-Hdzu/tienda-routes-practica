import React, { useState } from "react";
import { CenterInfo } from "../styles/styles.componets/styles-comp";
import { ThemeProvider } from "styled-components";
import { invertTheme, Button, theme } from "../styles/styles.componets/theme";
import {
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
  NavLink as NL,
} from "react-router-dom";


const Celulares = () => {
  const { nameCelular } = useParams(); 
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleClickDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features container">
          <h2>Info de celular</h2>
          <h3>{nameCelular}</h3>
          <ThemeProvider theme={invertTheme}>
            <Link to="details">
              {" "}
              <Button className="detalles" onClick={handleClickDetails}>{showDetails ? "Ocultar detalles" : "Mostrar detalles"}</Button>
            </Link>
            {showDetails && <Outlet />}
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </CenterInfo>
  );
};
export default Celulares;
