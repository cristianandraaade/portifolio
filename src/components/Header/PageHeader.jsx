import { Link } from "react-router-dom"
import styles from "./PageHeader.module.css"

function PageHeader() {


    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1 className={styles.titulo}>Cristian Andrade</h1>
            </div>

            <nav className={styles.navbar}>
                <Link className={styles.link} to="/home" style={{ marginRight: "10px" }}>Home</Link>
                <Link className={styles.link} to="/sobre" style={{ marginRight: "10px" }}>Sobre</Link>
                <Link className={styles.link} to="/projetos" style={{ marginRight: "10px" }}>Projetos</Link>
                <Link className={styles.link} to="/contato">Contato</Link>
            </nav>
        </header>
    )
}
export default PageHeader;