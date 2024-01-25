import styles from './ButtonOperator.module.css'


const ButtonOperator = ({ children, type}) => {

    const className = `${styles.btn} ${styles[type]}`;

    return (
        <button className={className}>{children}
        </button>
    )
}

export default ButtonOperator;