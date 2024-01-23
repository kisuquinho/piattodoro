import styles from './ButtonReserva.module.css';

const ButtonReserva = ( { children, type } ) => {

    const className = `${styles.btn} ${styles[type]}`;

    return (
        <a href="be.net/joyci" className={className}>
            {children}
        </a>
    )
}

export default ButtonReserva;