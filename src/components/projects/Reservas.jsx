import React from 'react';
import styles from './Reservas.module.css'; // Importando o módulo CSS para estilização
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa'; // Importando ícones
import { SiMongodb, SiBootstrap, } from 'react-icons/si'; // Mais ícones

function Reservas() {
  return (
    <section id="reservas" className={styles.section}>
      {/* Card de projeto */}
      <div className={styles.card}>
        <h3 className={styles.title}>IFC Sombrio Room Reservations</h3>
        <p className={styles.description}>
        This project aims to create a room reservation system for the Instituto Federal Catarinense (IFC) in Sombrio. 
        The system allows users to log in, reserve available rooms and administrators to manage the rooms through a dedicated interface.
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
            <FaHtml5 />
            <p>HTML5</p>
          </div>
          <div className={styles.skillItem}>
            <FaCss3Alt />
            <p>CSS3</p>
          </div>
          <div className={styles.skillItem}>
            <SiMongodb />
            <p>MongoDB</p>
          </div>
          <div className={styles.skillItem}>
            <SiBootstrap />
            <p>Bootstrap</p>
          </div>
        </div>


        {/* Link para o repositório GitHub */}
        <a
          href="https://github.com/joaolouko/app"
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.gitHubIcon}/>
          see on Github
          
        </a>
        
      </div>
    </section>
  );
}

export default Reservas;
