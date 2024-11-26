import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Atualizacao } from './pages/atualizacao';
import { NavBar } from './components/NavBar';
import { Registro } from './pages/registro';
import { Livros } from './pages/livros';
import { Sobre } from './pages/sobre';
import { Home } from './pages/home';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cadastro/livro" element={<Registro />} />
          <Route path="/atualizacao/livro/:id" element={<Atualizacao />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
