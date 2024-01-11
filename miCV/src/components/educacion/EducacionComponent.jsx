import styles from './EducacionComponent.module.css';

export const EducacionComponent =(props) => {
    return (
        <div className={styles.educationContainer}>
            <h1>Educacion</h1>
            <h2>Institucion</h2>
            {props.education.institution}
            <h2>Título</h2>
            {props.education.degree}
            <h2>Años</h2>
            {props.education.years}
        </div>
    );
}