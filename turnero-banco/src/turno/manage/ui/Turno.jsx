import { useEffect, useState } from "react";
import {tiposTurno} from "../../domain/tipos-turno";
import { SharedService } from "../../../rxjs/shared-service";
import { useDispatch } from "react-redux";
import { eliminarTurno } from "../../../redux/turnos/turnos";
import { getDate } from "../../create/utils/getDate";



export const Turno = ()=>{
    const [turno, setTurno] = useState(undefined);
    const dispatcher = useDispatch();
    let subscription;
    useEffect(()=>{
        subscription = SharedService.getSubject().subscribe(
            data =>{
                setTurno(data);
            }
        );

        return()=>{
            subscription.unsubscribe();
        }
    },[]);

    const finalizar = () =>{
        dispatcher(eliminarTurno(turno));
        SharedService.reset();
    }

    return (
        <>
            {
                turno ? 
                <div className="d-flex flex-column">
                    <h2>Atendido</h2>
                    <h3>Turno <span>#{turno.id}</span></h3>
                    Sector: {turno.tipo}<br/>
                    Motivo de turno: {turno.motivo}<br/>
                    Fecha de turno: {turno.fechaTurno}<br/>
                    { turno.tipo == tiposTurno.OFICIAL && 
                        <>
                        Oficial: {turno.oficial}
                        </>
                    }
                    {
                        turno.tipo == tiposTurno.ONLINE && 
                        <>
                        Fecha programada: {turno.dateScheduled}<br/>
                        Fecha fin: {getDate()}
                        </>
                    }
                    <button onClick={finalizar} className='btn btn-danger'>Finalizar</button>
                </div> : 
                <></>
            }
        </>
    )
}