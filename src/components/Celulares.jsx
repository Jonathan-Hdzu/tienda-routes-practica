import React from "react";
import { CenterInfo } from "../styles/styles.componets/styles-comp";
import { ThemeProvider } from "styled-components";
import { invertTheme, Button, theme } from "../styles/styles.componets/theme";
import { Route, Routes, Link, useParams, Outlet, NavLink as NL } from "react-router-dom";

const Celulares = () => {
    const { nameCelular } = useParams(); //obtenemos los keys del segmento dinamico del path
    
    return (
      <CenterInfo>
       <ThemeProvider theme={theme}>
       <div className="features container">
        <h2>Info de celular</h2>
        <h3>{nameCelular}</h3>
        <ThemeProvider theme={invertTheme}>
        <Link to='details'> <Button className="detalles">Ver detalles</Button></Link>
        <Outlet />
        </ThemeProvider>
        </div>
       </ThemeProvider>
      </CenterInfo>
      
    )
  }
export default Celulares;