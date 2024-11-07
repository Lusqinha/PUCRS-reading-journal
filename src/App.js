import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LocalStorageController } from './utils/controller';
import { NavBar } from './components/NavBar';
import { Registro } from './pages/registro';
import { Livros } from './pages/livros';
import { Sobre } from './pages/sobre';
import { Home } from './pages/home';

function App() {
  const controller = new LocalStorageController("livros");
  const livros = controller.listar();

  console.log(livros);

  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cadastro/livro" element={<Registro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
