import { useRef, useState } from "react";
import { toIntArray, tokenize, validDate } from "../app-utils/utils";
import { FechaEsValida } from "./ui/FechaEsValida";
import { FechaEsInvalida } from "./ui/FechaEsInvalida";

export const FechaValidaComponent = () =>{
    const [userInput, setUserInput] = useState('23/12/2022');
    const [fechaValida, setFechaValida] = useState(true);
    const inputRef = useRef(null);


    const validate = () =>{
        let data = inputRef.current.value;
        const tokenized = tokenize(data);
        const integers = toIntArray(tokenized);
        setFechaValida(validDate(integers));
    }

    return (
        <>
        <h1>Validador de fechas</h1>
        <h2>Ingrese fecha (dd/mm/yyyy)</h2>
        <input ref={inputRef} 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)}></input>
        <button onClick={validate}>
            Validar
        </button>
        {
            fechaValida ?
            <FechaEsValida />
            :
            <FechaEsInvalida />
        }
        </>
    );
}