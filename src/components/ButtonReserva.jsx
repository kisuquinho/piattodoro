import styles from './ButtonReserva.module.css';

const ButtonReserva = ( { children, type } ) => {

    const className = `${styles.btn} ${styles[type]}`;

    return (
        <a href="https://api.whatsapp.com/send?phone=5533999904680&text=Olá!" className={className}>
            {children}
        </a>
    )
}

export default ButtonReserva;