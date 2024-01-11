import {useEffect, useState } from "react";
import { tiposTurno } from "../../domain/tipos-turno";
import { useDispatch } from "react-redux";
import { limpiarTurno, modificarTurno } from "../../../redux/turnos/turno";
import { TurnoBaseForm } from "./BaseForm";
import { SharedFormData } from "../../../rxjs/shared-service";
import { TurnoOficialForm } from "./OficialForm";
import { TurnoOnlineForm } from "./OnlineForm";
import { agregarTurno } from "../../../redux/turnos/turnos";


export const CrearTurno = () => {
    const [tipoTurno, setTipoTurno] = useState(tiposTurno.CAJA);
    const [turnoDraft, setTurno] = useState({});
    const dispatcher = useDispatch();
    const [turnoCounter, setTurnoCounter] = useState(parseInt(localStorage.getItem('count')) || 1);
    
    let subscription;

    useEffect(()=>{
        subscription = SharedFormData.getSubject().subscribe(
            data =>{
                setTurno(prev=> ({...prev, ...data}));
            }
        );
        return()=>{
            subscription.unsubscribe();
        }
    },[]);

    useEffect(()=>{
        dispatcher(modificarTurno({tipo:tipoTurno}));
    },[tipoTurno])

    useEffect(() => {
        localStorage.setItem('count', turnoCounter);
      }, [turnoCounter]);


    const programarTurno = () =>{
        turnoDraft.id = turnoCounter;
        turnoDraft.tipo = tipoTurno;
        dispatcher(modificarTurno(turnoDraft));
        dispatcher(agregarTurno(turnoDraft));
        limpiar();
        setTurnoCounter(prev=>prev+1);
    }
    
    const vaciarTurno = ()=>{
        dispatcher(limpiarTurno());
        setTurno({});
    }
    

    const limpiar = () =>{
        let inputs = document.querySelectorAll("input");
        inputs.forEach(element => {
            element.value ="";
        });

        let textAreas =  document.querySelectorAll("textarea");

        textAreas.forEach(element =>{
            element.value ="";
        });

        vaciarTurno();
    }

    const handleClick = (tipo) =>{
        limpiar();
        setTipoTurno(tipo);
    }

    return (
        <>  
        <div className="container">
            <h1>Crear Turno</h1>
            <div className='row'>
                <div className='col-4'>
                    <div className="d-flex flex-column">
                        <button onClick={()=>handleClick(tiposTurno.CAJA)}>Caja</button>
                        <button onClick={()=>handleClick(tiposTurno.ONLINE)}>Online</button>
                        <button onClick={()=>handleClick(tiposTurno.OFICIAL)}>Oficial</button>
                    </div>
                </div>
                <div className='col'>

                    <TurnoBaseForm />
                    {
                        tipoTurno === tiposTurno.OFICIAL &&
                        <TurnoOficialForm/>
                    }
                    {
                        tipoTurno === tiposTurno.ONLINE &&
                        <TurnoOnlineForm/>
                    }
                    <button className="btn btn-danger" onClick={limpiar}>Limpiar</button>
                    <button className="btn btn-success" onClick={programarTurno}>Programar</button>
                </div>
            </div>
        </div>
        </>
    );
}