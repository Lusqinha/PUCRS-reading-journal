import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <header>
            <nav className="navbar-container">
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/livros">Lista de Livros</Link>
                    </li>
                    <li>
                        <Link to="/cadastro/livro">Cadastrar Livro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

