import React from "react";
import {
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
  NavLink as NL,
} from "react-router-dom";
import { CenterInfo } from "../styles/styles.componets/styles-comp";

const SearchPage = () => {
  const celulares = ["Samsung", "Iphone", "LG", "Xiaomi"];

  return (
    <CenterInfo>
    <div className="container">
    <h2>Nuestro catálogo</h2>
      <div className="catalogo">
      <ul className="lista">
        {celulares.map((celular) => (
          <li className="lista-celular" key={celular}>
            <Link to={`/celulares/${celular}`}>{celular}</Link>
          </li>
        ))}
      </ul>
      </div>
      <p>Elige el catalogo de tu preferencia</p>
      

    </div>
      
    </CenterInfo>
  );
};

export default SearchPage;
