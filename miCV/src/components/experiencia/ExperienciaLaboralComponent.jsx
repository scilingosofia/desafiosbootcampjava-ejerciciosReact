import { ExperienciaComponent } from "./ExperienciaComponent"
import styles from './ExperienciaLaboralComponent.module.css';

export const ExperienciaLaboralComponent = (props) => {
    return (
        <div className={styles.experienciaContainer}>
            <h1>Experiencia Laboral</h1>
            {props.experience.map((exp) => (
                <ExperienciaComponent experience={exp} key={exp.index} />
            ))}
        </div>
    )
}