import styles from './DatosPersonales.module.css';

export const DatosPersonales = (props) => {
    return (
        <div className={styles.personalDataContainer}>
            {
                props.personalInfo.name ?
                    <>
                        <h1>{props.personalInfo.name} {props.personalInfo.lastName}</h1>
                    </>
                    :
                    <></>
            }
            {
                props.title ?
                    <>
                        <h2>{props.title.title} en {props.title.company}</h2>
                    </>
                    :
                    <></>
            }
            {props.personalInfo.address ?
                <>
                    <h2>Dirección</h2>
                    {props.personalInfo.address}
                </>
                :
                <></>
            }
            {
                props.personalInfo.email ?
                    <>
                        <h2>email</h2>
                        {props.personalInfo.email}
                    </>
                    :
                    <></>
            }
            {
                props.personalInfo.mobile ?
                    <>
                        <h2>teléfono</h2>
                        {props.personalInfo.mobile}
                    </>
                    :
                    <></>
            }

        </div>
    );
}