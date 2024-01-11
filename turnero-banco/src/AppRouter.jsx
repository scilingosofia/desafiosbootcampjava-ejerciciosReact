import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { CrearTurno } from "./turno/create/ui/CrearTurno";
import { ListadoTurno } from "./listar-turnos/ListadoTurno";
import { Navbar } from "./navbar/Navbar";
import { routes } from "./navbar/routes";

export const AppRouter = () =>{
    return(
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={routes.publicas.HOME} element={<Home/>}/>
                <Route path={routes.publicas.CREATE} element={<CrearTurno/>}/>
                <Route path={routes.publicas.LIST} element={<ListadoTurno/>}/>
            </Routes>
        </BrowserRouter>
        </>
    );
}