export const ExperienciaComponent = (props) =>{
    return (
        <>
            <h4>{props.experience.title} en {props.experience.company}</h4>
            <h5>{props.experience.dateStart} - {props.experience.dateFinish}</h5>
            <p>
                {props.experience.description}
            </p>
        </>
    );
}