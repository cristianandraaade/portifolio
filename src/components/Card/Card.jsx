import styles from "./Card.module.css"
import React from "react";


function Card({ repositories }) {
    return (
        <>
            {repositories.map((repo) => (
                <div key={repo.id} className={styles.card}>
                    <h3 className={styles.repoTitle}>{repo.name}</h3>
                    {repo.description && (
                        <p className={styles.repoDescription}>{repo.description}</p>
                    )}
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Ver repositório
                    </a>
                    {repo.language && (
                        <div className={styles.languages}>
                            <span className={styles.language}>{repo.language}</span>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
export default Card;