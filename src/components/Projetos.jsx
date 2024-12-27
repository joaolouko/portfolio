import React from 'react';
import Reservas from './projects/Reservas'; // Importe o componente Reservas
import styles from './Projetos.module.css';
import Portfolio from './projects/Portfolio';

function Projetos() {
  return (
    <section id="projetos" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>Projects</h2>
        {/* Grid responsivo com Bootstrap */}
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <Reservas />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <Portfolio />
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Projetos;
