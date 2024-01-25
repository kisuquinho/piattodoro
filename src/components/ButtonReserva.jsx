import styles from './ButtonReserva.module.css';

const ButtonReserva = ( { children, type, href } ) => {

    const className = `${styles.btn} ${styles[type]}`;

    return (
        <a href={href} className={className}>
            {children}
        </a>
    )
}

export default ButtonReserva;