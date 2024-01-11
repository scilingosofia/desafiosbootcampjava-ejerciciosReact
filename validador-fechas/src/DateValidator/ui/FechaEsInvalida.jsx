import styles from './FechaValida.module.css'

export const FechaEsInvalida = () => {
    return (
        <div className={styles.invalid}>
            <h2>¡Fecha Inválida!</h2>
        </div>
    );
}