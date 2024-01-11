import styles from './FotoComponentComponent.module.css'

export const FotoComponent = (props) =>{
    return (
        <div className={styles.photoContainer}>
            <img className= {styles.profilePic} src={props.photo} />
        </div>
    )
}