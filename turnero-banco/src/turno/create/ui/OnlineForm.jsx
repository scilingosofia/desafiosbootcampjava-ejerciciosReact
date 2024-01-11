import { useEffect, useRef } from "react";
import { SharedFormData } from "../../../rxjs/shared-service";
import { getDate } from "../utils/getDate";
import { tiposTurno } from "../../domain/tipos-turno";
import { useDispatch } from "react-redux";
import { modificarTurno } from "../../../redux/turnos/turno";

export const TurnoOnlineForm = () =>{
    const dateRef = useRef();
    const dispatcher = useDispatch();
    
    const fillWithDate = (e) =>{
        e.target.value = getDate();
    }

    useEffect(()=>{
        dispatcher(modificarTurno({tipo: tiposTurno.ONLINE}));
    },[]);

    useEffect(()=>{
        SharedFormData.next({tipo: tiposTurno.ONLINE, dateScheduled:dateRef.current.value });
    },[dateRef]);

    return(
            
        <>
        <div className="d-flex">
            <label htmlFor="fecha_programada_turno">Fecha Programada:</label> 
            <input readOnly={true} 
                type="text" 
                name="fecha_programada_turno" 
                id="fecha_programada_turno" 
                value={getDate()}
                onClick={(e)=>fillWithDate(e)}
                ref={dateRef}
                required/>
            <label htmlFor="fecha_fin">Fecha Finalizacion</label>
            <input readOnly={true} 
                type="text" 
                name="fecha_fin" 
                id="fecha_fin"/>
        </div>
        </>
    )
}