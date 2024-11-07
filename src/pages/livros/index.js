import { LocalStorageController } from "../../utils/controller";
import { BookList } from "../../components/BookList";

export function Livros() {

    const controller = new LocalStorageController("livros");

    const livros = controller.listar();

    return (
        <div>
            <h1>Livros</h1>
            <BookList dados={livros} />
        </div>
    );
}