import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Importando ícones
import { SiMongodb, SiBootstrap } from 'react-icons/si'; // Mais ícones
import { GrMysql } from 'react-icons/gr';
import ImagemPerfil from '../images/perfil.jpeg';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        {/* About Section */}
        <div className="row align-items-center mb-5">
          {/* Imagem de perfil */}
          <div className="col-12 col-md-4 text-center">
            <img className="img-fluid rounded-circle mb-3" src={ImagemPerfil} alt="Imagem de perfil" />
            <ul className={styles.languages}>
              <li><span>US</span> English</li>
              <li><span>PT-BR</span> Portuguese</li>
            </ul>
          </div>

          {/* Texto sobre mim */}
          <div className="col-12 col-md-8">
            <div className={styles.textContainer}>
              <h1>About me</h1>
              <p>
                I'm João Pires, a developer from Torres, Brazil. I've had a passion for technology since I was a child, and the development area has only fueled this passion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="container">
        <h2 className={styles.title}>Technologies I Work With</h2>
        <div className="row">
          {/* Ícones e nomes das tecnologias */}
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <FaJsSquare style={{ color: '#f7df1e', fontSize: '3rem' }} />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <FaReact style={{ color: '#61dafb', fontSize: '3rem' }} />
              <p>React</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <FaNodeJs style={{ color: '#68a063', fontSize: '3rem' }} />
              <p>Node.js</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <FaHtml5 style={{ color: '#e34f26', fontSize: '3rem' }} />
              <p>HTML5</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <FaCss3Alt style={{ color: '#1572b6', fontSize: '3rem' }} />
              <p>CSS3</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <SiMongodb style={{ color: '#47a248', fontSize: '3rem' }} />
              <p>MongoDB</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <GrMysql style={{ color: '#0394fc', fontSize: '3rem' }} />
              <p>MySQL</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mb-4">
            <div className={styles.skillItem}>
              <SiBootstrap style={{ color: '#9003fc', fontSize: '3rem' }} />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
