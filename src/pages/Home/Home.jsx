import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css"
import TextTap from "../../components/Text/TextTap.jsx"
import Sobre from "../Sobre/Sobre.jsx"
import Projetos from "../Projetos/Projetos.jsx"
import Contatos from "../Contato/Contato.jsx"

function Home() {
    const { section } = useParams();
    useEffect(() => {
        if (section) {
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [section]);
    return (
        <div className={styles.home}>
            <section id="home">
                <div className={styles.page}>
                    <div className={styles.container}>
                        <div className={styles.imagem}>
                            <img src="../../../public/assets/img/eu.jpeg" alt="eu" />
                        </div>
                        <div className={styles.text}>
                            <TextTap style={{
                                fontSize: 50,
                                lineHeight: '1.2em',
                                minHeight: '2.4em',
                                whiteSpace: 'pre-line',
                                display: 'inline-block',
                            }} text={"Hello World!\nI'm a Full-Stack Developer"} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre">
                <Sobre />
            </section>

            <section id="projetos">
                <Projetos/>
            </section>

            <section id="contato">
                <Contatos/>
            </section>
        </div>
    )
}
export default Home