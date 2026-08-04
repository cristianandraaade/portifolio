import styles from "./Projetos.module.css";
import Card from "../../components/Card/Card.jsx";
import projetosSelecionados from "../../data/projetos.json";


function Projetos() {
    return (
        <div className={styles.projetos}>
            <div className={styles.cardsPage}>
                <Card repositories={projetosSelecionados} />
            </div>
        </div>
    );
}
export default Projetos;
