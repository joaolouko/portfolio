import React from 'react';
import styles from './Reservas.module.css'; // Importando o módulo CSS para estilização
import { FaJsSquare, FaReact, FaCss3Alt, FaGithub } from 'react-icons/fa'; // Importando ícones
import { SiBootstrap, } from 'react-icons/si'; // Mais ícones

function Portfolio() {
  return (
    <section id="reservas" className={styles.section}>
      {/* Card de projeto */}
      <div className={styles.card}>
        <h3 className={styles.title}>Personal Portfolio</h3>
        <p className={styles.description}>
        This project itself is the creation of my personal dev portfolio, possibly in the future I will put it on github, who knows?
        (BTW, if you are accessing this page on a phone, you are probably seeing everything too big or too small, sorry about that, I will fix it later)
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
            <FaCss3Alt />
            <p>CSS3</p>
          </div>
          <div className={styles.skillItem}>
            <SiBootstrap />
            <p>Bootstrap</p>
          </div>
        </div>


        {/* Link para o repositório GitHub */}
        <a
          
          className={styles.linkDisabled}
          target="_blank"
          rel="noopener noreferrer"
          disabled
        >
          <FaGithub className={styles.gitHubIcon}/>
          see on Github
          
        </a>
        
      </div>
    </section>
  );
}

export default Portfolio;   
