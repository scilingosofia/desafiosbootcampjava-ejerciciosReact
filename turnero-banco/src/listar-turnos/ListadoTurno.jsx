import { useSelector } from "react-redux";
import { SharedService } from "../rxjs/shared-service";
import { Turno } from "../turno/manage/ui/Turno";

export const ListadoTurno = () => {
    
    const turnos = useSelector(state => state.turnos.turnos);

    const showModal = (turno) =>{
      SharedService.next(turno);
    }

    return (
      <>
      <h1>Turnos</h1>
      <div className="container">
      <div className='row'>
        <div className='col-4'>
          <h2>En espera</h2>
            {turnos.map( turno=> (
              <div className="turnoItem" key={turno.id}>
                Tipo: {turno.tipo} | fecha {turno.fechaTurno}
                <button onClick={()=>showModal(turno)}>Atender</button>
              </div>
            )
            )}
        </div>
        <div className="col">
          <Turno/>
        </div>

      </div>

      </div>
      </>

    );
}