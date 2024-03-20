import React from "react";
import { ThemeProvider } from "styled-components";
// import {Button, invertTheme, theme} from "../styles/theme"
import { Route, Routes, Link, useParams, Outlet, NavLink as NL } from "react-router-dom";
import { Button, invertTheme, theme } from "../styles/styles.componets/theme";

const Home = () => {

    return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <h2>Tienda online</h2>
        <p>Somos una tienda amantes de los teléfonos. Nuestro principal gusto son los sistemas Android, escondemos un gusto especial con la marca Samsung, sin embargo, ofrecemos una amplia gama de celulares. </p>
        <ThemeProvider theme={theme}>
        <Link to= "/search-page" ><Button className="home-info">Ver más</Button></Link>
        </ThemeProvider>
      </div>
    </ThemeProvider>
    )
};

export default Home;