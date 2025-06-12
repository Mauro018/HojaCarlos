import './App.css';
import Encabezado from './components/Encabezado';
import Acerca from './components/Acerca';
import Educacion from './components/Educacion';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Referencias from './components/Referencias';

function App() {
  return (
    <div className="app">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Educacion />
        <Habilidades />
        <Experiencia />
        <Referencias />
      </main>
    </div>
  );
}

export default App;