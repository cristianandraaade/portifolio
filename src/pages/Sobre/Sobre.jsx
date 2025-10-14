import styles from "./Sobre.module.css";

function Sobre() {
    return (
        <div className={styles.sobre}>
            <p className={styles.sobreTexto}>
                Sou <strong>estudante de Análise e Desenvolvimento de Sistemas (4º período)</strong>,
                apaixonado por tecnologia e desenvolvimento de software. Tenho grande interesse pela área
                <strong> full-stack</strong>, buscando constantemente aprimorar minhas habilidades tanto no
                <strong> front-end</strong> quanto no <strong>back-end</strong>.
                <br /><br />
                Possuo experiência acadêmica e projetos pessoais utilizando <strong>PHP</strong>,
                <strong> Node.js</strong>, <strong>TypeScript</strong>, <strong>Java</strong> e <strong>C#</strong>, além de familiaridade com
                <strong> bancos de dados relacionais e não relacionais</strong>,
                <strong> APIs REST</strong> e <strong>boas práticas de versionamento com Git</strong>.
                <br /><br />
                Sou motivado a aprender novas tecnologias e frameworks, trabalho bem em equipe e estou sempre
                em busca de novos desafios que me façam evoluir como desenvolvedor.
                <br /><br />
                Meu objetivo é atuar profissionalmente no desenvolvimento de aplicações web completas,
                entregando soluções funcionais, seguras e bem estruturadas.
            </p>
            <div className={styles.techs}>
                <h3 id={styles.aa}>Tecnologias:</h3>
                <div className={styles.techIcons}>
                    {/* Front-end */}
                    <i className="devicon-html5-plain colored"></i>
                    <i className="devicon-css3-plain colored"></i>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-vuejs-plain colored"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-php-plain colored"></i>
                    <i className="devicon-laravel-plain colored"></i>
                    <i className="devicon-csharp-plain colored"></i>
                    <i className="devicon-spring-plain colored"></i>
                    <i className="devicon-python-plain colored"></i>
                    <i className="devicon-mysql-plain colored"></i>
                    <i className="devicon-mongodb-plain colored"></i>

                    {/* Versionamento */}
                    <i className="devicon-git-plain colored"></i>
                </div>
            </div>
        </div>
    )
}
export default Sobre;