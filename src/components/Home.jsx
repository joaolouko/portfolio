import React, { useState, useEffect } from 'react';
import ImagemPerfil from '../images/perfil.jpeg';
import styles from './Home.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importa ícones

function Home() {
  const Titles = ['Web Developer', 'Software Developer', 'Full Stack Developer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Estado para animação

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Titles.length);
        setIsFading(false);
      }, 500); // Duração da animação
    }, 2500);

    return () => clearInterval(intervalId);
  }, [Titles.length]);

  return (
    <section id="home" className={styles.section}>
      <img src={ImagemPerfil} alt="Foto de perfil" className={styles.image} />
      <h1 className={styles.title}>Hello! I'm John Pires</h1>
      <h2 className={`${styles.titleAnimated} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
        {Titles[currentIndex]}
      </h2>
      <div className={styles.descriptionBox}>
        <p className={styles.description}>
          Welcome to my dev portfolio. Here I will show you my most relevant projects in the dev area, my skills with technology and my experience in the area. This portfolio will be updated frequently so that you can follow my most recent projects.
        </p>
      </div>

      <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pires-088452211/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/joaolouko" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/joaopiresmn" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>
    </section>
  );
}

export default Home;
