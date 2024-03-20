import React from "react";
import "./App.css";
import { Route, Routes, Link, useParams, Outlet, NavLink as NL, NavLink } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";
import NvLink from "./components/NavLink";
import logo from "./assets/logo.png"

function App() {
  return (
    <div>
      <header>
      <NvLink to="/"><img src={logo} alt="Smarthphone y carrito" className="img-shop" /></NvLink>
      
        <nav>
          <ul>
            <li>
              <NvLink to="/">Home</NvLink>
            </li>
            <li>
              <NvLink to="/search-page">Catalogo</NvLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Aca encapsulamos las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />}/>
        <Route path="/celulares/:nameCelular" element={<Celulares/>}>
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
