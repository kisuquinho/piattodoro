import styles from './Menu.module.css'

const Menu = () => {
    return (
        <article className={styles.menu}>
            <h2>MENU</h2>
            <p>Conta com os favoritos dos fundadores e os principais tradicionais pratos italianos.
Além disso, a cada semana temos um <span>piatto speciale</span> novo adicionado temporariamente ao menu.</p>
            <div className={styles.showcase}>
                <img src="./food1.avif" alt="Food picture" />
                <img src="./food2.avif" alt="Food picture" />
                <img src="./food3.avif" alt="Food picture" />
            </div>
        </article>
    )
}

export default Menu;