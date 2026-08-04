import styles from "./Experiencias.module.css";
import experienciasSelecionadas from "../../data/experiencias.json";

function Experiencias() {
    return (
        <div className={styles.experiencias}>
            <div className={styles.listaContainer}>
                <h2 className={styles.titulo}>Experiências</h2>
                <ul className={styles.lista}>
                    {experienciasSelecionadas.map((experiencia, index) => (
                        <li
                            key={experiencia.id}
                            className={styles.item}
                            style={{ animationDelay: `${index * 0.12}s` }}
                        >
                            <div className={styles.conteudo}>
                                <h3 className={styles.cargo}>{experiencia.name}</h3>
                                {experiencia.empresa && (
                                    <p className={styles.empresa}>Empresa: {experiencia.empresa}</p>
                                )}
                                {experiencia.periodo && (
                                    <p className={styles.periodo}>Período: {experiencia.periodo}</p>
                                )}
                                <p className={styles.descricao}>{experiencia.description}</p>
                                <div className={styles.rodape}>
                                    <span className={styles.tecnologias}>{experiencia.language}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experiencias;
