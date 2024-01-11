import { createSlice } from "@reduxjs/toolkit";
import { tiposTurno } from "../../turno/domain/tipos-turno";

const turnoEmptyState = {
    tipo:tiposTurno.CAJA,
    motivo:"",
    fechaTurno:""
};

export const TurnoSlice = createSlice(
    {
        name:"turno",
        initialState:turnoEmptyState,
        reducers:{
            crearTurno:(state,action) =>{
                return action.payload;
            },
            modificarTurno:(state, action)=>{
                return {...state,...action.payload};
            },
            limpiarTurno:() =>{
                return turnoEmptyState;
            }
        }
    }
);

export const { crearTurno, modificarTurno , limpiarTurno} = TurnoSlice.actions;