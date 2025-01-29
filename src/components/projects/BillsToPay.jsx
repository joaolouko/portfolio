import { FaCss3Alt, FaGithub, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import styles from './Reservas.module.css'; // Importando o módulo CSS para estilização
import { GrMysql } from 'react-icons/gr';

function BillsToPay() {
    return (
        <section id="reservas" className={styles.section}>
            {/* Card de projeto */}
            <div className={styles.card}>
                <h3 className={styles.title}>Bills To pay</h3>
                <p className={styles.description}>
                    This is a project to organize your household bills. The user can write down how much they should pay in the month in question and thus manage their accounts more easily.
                </p>
                <div className={styles.skillsGrid}>
                    <div className={styles.skillItem}>
                        <FaJsSquare />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.skillItem}>
                        <FaReact />
                        <p>React</p>
                    </div>
                    <div className={styles.skillItem}>
                        <FaNodeJs />
                        <p>Node.js</p>
                    </div>
                    <div className={styles.skillItem}>
                        <FaCss3Alt />
                        <p>CSS3</p>
                    </div>
                    <div className={styles.skillItem}>
                        <GrMysql />
                        <p>MySQL</p>
                    </div>
                </div>


                {/* Link para o repositório GitHub */}
                <a
                    href='https://github.com/joaolouko/billstopay.git'
                    className={styles.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className={styles.gitHubIcon} />
                    see on Github

                </a>

            </div>
        </section>

    )
}

export default BillsToPay