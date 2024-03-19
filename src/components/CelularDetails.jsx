import React from "react";
import { Route, Routes, Link, useParams, Outlet, NavLink as NL } from "react-router-dom";
import dataCelu from "../data/dataCelu";



//Componente para los detalles del celular selccionado
const CelularDetails = () => {
    const { nameCelular } = useParams();
    const detalles = dataCelu[nameCelular];
    
    return (
      <div className="container detalles_movil">
        <h3>Detalles del {nameCelular} </h3>
        <h4 className="detalles_movil--titulo"> Modelo: {detalles.modelo} </h4>
        <h4 className="detalles_movil--titulo"> Precio: {detalles.precio} </h4>
        <h4 className="detalles_movil--titulo"> Detalles: {detalles.desc} </h4>
      </div>
    )
};

export default CelularDetails;