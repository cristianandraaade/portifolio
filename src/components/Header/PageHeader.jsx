import { Link } from "react-router-dom"
import styles from "./PageHeader.module.css"
import TextTap from "../Text/TextTap.jsx";

function PageHeader() {


    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Cristian Andrade</h1>
            </div>
            
            <nav className={styles.navbar}>
                <Link className={styles.link}to="/" style={{ marginRight: "10px" }}>Home</Link>
                <Link className={styles.link}to="/sobre" style={{ marginRight: "10px" }}>Sobre</Link>
                <Link className={styles.link}to="/projetos" style={{ marginRight: "10px" }}>Projetos</Link>
                <Link className={styles.link}to="/contato">Contato</Link>
            </nav>
        </header>
    )
}
export default PageHeader;