import styles from './Rodizio.module.css'
import ButtonReserva from './ButtonReserva';
import ButtonOperator from './ButtonOperator';
import { useState } from 'react';

const Rodizio = () => {

    const [count, setCount] = useState(2);

    const decrease = () => {
        if (count >= 2) {
            setCount(count - 1);
        }
    }

    const increase = () => {
        setCount(count + 1);
    }

    const classDecrease = `${styles.btn} ${styles.left}`;

    const classIncrease = `${styles.btn} ${styles.right}`;

    const link = `https://api.whatsapp.com/send?phone=5533999904680&text=Olá!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20${count}.`

    return (
        <section className={styles.rodizio}>
            <h2>RODÍZIO DE MASSAS</h2>
            <p>Em todas as sextas-feiras preparamos a casa para degustação ilimitada de dezenas de items do menu através
                de nosso <span>Rodízio de Massas</span>. Na hora final, além de massas, iniciamos o menu de sobremesas.
            </p>
            <div className={styles.horario}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9V18L24 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Às sextas-feiras, das 19h às 22h</p>
            </div>
            <div className={styles.btnwrapper}>
                <button onClick={decrease} className={classDecrease}>-</button>
                <ButtonReserva href={link} type='section'>Reservar para {count}</ButtonReserva>
                <button onClick={increase} className={classIncrease}>+</button>
            </div>
            <p className={styles.min}>Limitamos o número de mesas durante o rodízio para facilitar o planejamento interno. 
                Portanto, só recebemos visitas previamente reservadas.
            </p>
        </section>
    )
}

export default Rodizio;