import React from "react";
import { NavLink } from "react-router-dom";
import {routes} from './routes'

export const Navbar = () =>{
    return (
        <>
        <NavLink to={routes.publicas.HOME}>Home</NavLink> |
        <NavLink to={routes.publicas.CREATE}>Creador de Turnos</NavLink> |
        <NavLink to={routes.publicas.LIST}>Listado de Turnos</NavLink>
        </>
    );
}