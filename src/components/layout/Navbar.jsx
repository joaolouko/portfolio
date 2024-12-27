import React from 'react';
import styles from './Navbar.module.css'

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('sobre')}>About me</li>
        <li onClick={() => scrollToSection('projetos')}>Projects</li>
        {/*<li onClick={() => scrollToSection('contato')}>Contact</li>*/}
      </ul>
    </nav>
  );
}

export default Navbar;
