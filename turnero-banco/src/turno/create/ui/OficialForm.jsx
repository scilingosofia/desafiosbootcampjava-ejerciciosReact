import { useEffect, useRef } from "react";
import { SharedFormData } from "../../../rxjs/shared-service";
import { tiposTurno } from "../../domain/tipos-turno";
import { useDispatch } from "react-redux";
import { modificarTurno } from "../../../redux/turnos/turno";


export const TurnoOficialForm = () =>{
    const oficialNameRef = useRef();
    const oficialLastNameRef = useRef();
    const dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(modificarTurno({tipo: tiposTurno.OFICIAL}));
    },[]);
    
    const handleChange = ()=>{
        SharedFormData.next({tipo: tiposTurno.OFICIAL, oficial: `${oficialNameRef.current.value} ${oficialLastNameRef.current.value}` });
    }

    return (
        <>
            <div className="d-flex">
                <label htmlFor="nombre_oficial">
                    Nombre Oficial:
                </label>
                <input type="text" 
                    name="nombre_oficial" 
                    id="nombre_oficial" 
                    ref={oficialNameRef}
                    onChange={handleChange}
                    required/>
                <label htmlFor="apellido_oficial">
                    Apellido Oficial:
                </label>
                <input type="text" 
                    name="apellido_oficial" 
                    id="apellido_oficial" 
                    ref={oficialLastNameRef}
                    onChange={handleChange}
                    required/>
            </div>
        </>
    )
}