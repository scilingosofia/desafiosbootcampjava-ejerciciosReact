import { useEffect, useRef } from "react";
import { SharedFormData } from "../../../rxjs/shared-service";
import { tiposTurno } from "../../domain/tipos-turno";
import { useDispatch } from "react-redux";
import { modificarTurno } from "../../../redux/turnos/turno";

export const TurnoBaseForm = ()=>{
    const dateRef = useRef();
    const reasonRef = useRef();
    const dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(modificarTurno({tipo:tiposTurno.CAJA}));
    },[]);

    const handleChange = ()=>{
        SharedFormData.next({tipo:tiposTurno.CAJA, fechaTurno: dateRef.current.value, motivo: reasonRef.current.value});
    }


    return (
        <>
            <div className="d-flex flex-column">
                <label htmlFor="fecha_turno">Fecha (AAAAMMDD)</label>
                <input type="text" 
                    name="fecha_turno"
                    id="fecha_turno" 
                    ref={dateRef} 
                    onChange={handleChange}
                    required/>
                <label htmlFor="motivo">Motivo:</label>
                <textarea 
                    name="motivo" 
                    id="motivo" 
                    ref={reasonRef} 
                    onChange={handleChange}
                    required/>
            </div>
            
        </>
    )
}