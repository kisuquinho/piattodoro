import styles from './ButtonReserva.module.css';

const ButtonReserva = ( { children } ) => {
    return (
        <a href="be.net/joyci" className={styles.btn}>
            {children}
        </a>
    )
}

export default ButtonReserva;