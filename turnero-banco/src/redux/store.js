import { configureStore } from "@reduxjs/toolkit";
import { TurnosSlice } from "./turnos/turnos";
import { TurnoSlice } from "./turnos/turno";

export const TurnosStore = configureStore(
    {
        reducer:{
            turno: TurnoSlice.reducer,
            turnos: TurnosSlice.reducer
        }
    }
);

export default TurnosStore;