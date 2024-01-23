import styles from './Menu.module.css'

const Menu = () => {
    return (
        <article className={styles.menu}>
            <h2>MENU</h2>
            <p>Conta com os favoritos dos fundadores e os principais tradicionais pratos italianos.
Além disso, a cada semana temos um <span>piatto speciale</span> novo adicionado temporariamente ao menu.</p>
            <div className={styles.showcase}>
                <img src="./public/food1.png" alt="Food picture" />
                <img src="./public/food2.png" alt="Food picture" />
                <img src="./public/food3.png" alt="Food picture" />
            </div>
        </article>
    )
}

export default Menu;