import styles from './Rodizio.module.css'
import ButtonReserva from './ButtonReserva';
import ButtonOperator from './ButtonOperator';

const Rodizio = () => {

    return (
        <section className={styles.rodizio}>
            <h2>RODÍZIO DE MASSAS</h2>
            <p>Em todas as sextas-feiras preparamos a casa para degustação ilimitada de dezenas de items do menu através
                de nosso Rodízio de Massas. Na hora final, além de massas, iniciamos o menu de sobremesas.
            </p>
            <div className={styles.horario}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
    <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 9V18L24 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
                <p>Às sextas-feiras, das 19h às 22h</p>
            </div>
            <div className={styles.btnwrapper}>
                <ButtonOperator type='left'>-</ButtonOperator>
                <ButtonReserva type='section'>Reservar para 2</ButtonReserva>
                <ButtonOperator type='right'>+</ButtonOperator>
            </div>
            <p className={styles.min}>Limitamos o número de mesas durante o rodízio para facilitar o planejamento interno. 
                Portanto, só recebemos visitas previamente reservadas.
            </p>
        </section>
    )
}

export default Rodizio;