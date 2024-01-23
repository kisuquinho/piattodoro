import styles from './AdInfo.module.css'

const AdInfo = () => {
    return (
        <section className={styles.adinfo}>
            <div className={styles.overlay}></div>
            <h2>HORÁRIO DE FUNCIONAMENTO</h2>
            <p>Segunda a sexta de 17h às 21h <br />
Sábado de 18h às 23h</p>
        </section>
    )
}

export default AdInfo;