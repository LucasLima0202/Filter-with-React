import menu from 'data/menu.json';
import styles from "./Home.module.scss";

export default function Home() {
    let topfeatureddishes = [...menu];
    topfeatureddishes = topfeatureddishes.sort(() => 0.5 - Math.random()).splice(0,3);
return(
    <section>
    <h3 className={styles.title}>
        Kitchen Recommendations
    </h3>
    <div className={styles.recomendados}>
    {topfeatureddishes.map(item => (
        <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
                See more
            </button>
        </div>
    ))}
    </div>
    </section>
    );
}