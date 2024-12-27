import React from 'react';
import styles from './Contato.module.css'

function Contato() {
  return (
    <section id="contato" className="section">
      <div className={styles.container}>
        <h2>Contact me!</h2>
        <p>You can contact me by my E-mail: <a href="mailto:joaopiresmachadonunes@gmail.com">joaopiresmachadonunes@gmail.com</a></p>
      </div>

    </section>
  );
}

export default Contato;
