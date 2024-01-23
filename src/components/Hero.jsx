import styles from './Hero.module.css';

const Hero = () => {
    return (
        <main>
            <div className={styles.overlay}></div>
            <h1>Piatto D'Oro</h1>
            <p>Culinária italiana com um “quê” de casa</p>
        </main>
    )
}

export default Hero;