import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <main>
        <Home />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
