import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Contato.module.css";

function Contato() {
    const [copied, setCopied] = useState(false);
    const email = "cristian@example.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // feedback some depois de 2s
            })
            .catch(err => console.error("Erro ao copiar o email:", err));
    };

    return (
        <div className={styles.contato}>
            <div className={styles.content}>
                <h2>Fale Comigo</h2>

                <div className={styles.icons}>
                    <button className={styles.iconButton} onClick={handleCopyEmail}>
                        <FaEnvelope />
                    </button>

                    <a href="https://github.com/cristian" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://linkedin.com/in/cristian" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>

                {copied && <p className={styles.copiedMsg}>Email copiado!</p>}
            </div>
        </div>
    );
}

export default Contato;
