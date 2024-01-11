export const FinalizarTurno = () =>{

    const dispatcher = useDispatch();
    let subscription;
    useEffect(()=>{
        subscription.getSubject();subscribe(
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
        subscription.reset();
    }


    return (
        <button onClick={finalizar} 
            className='btn btn-danger'>
                Finalizar
        </button>
    )
}