import styles from "./Home.module.css"
import TextTap from "../../components/Text/TextTap.jsx"

function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src="src\assets\img\eu.jpeg" alt="" />
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
    )
}
export default Home