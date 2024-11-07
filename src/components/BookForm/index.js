import { LocalStorageController } from "../../utils/controller";

export function BookForm() {

    const controller = new LocalStorageController("livros");

    const saveBook = (event) => {
        event.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const data = document.getElementById('data').value;

        const livro = {
            titulo,
            autor,
            genero,
            data
        }

        controller.adicionar(livro);

        window.location.reload();
    }

  return (
    <div>
        <h1>Formulário de Registro</h1>
        <form action="" onSubmit={saveBook}>

            <div className="form-input">
                <label htmlFor="titulo" >Título: </label>
                <input type="text" required id="titulo" placeholder="Ex.: Senhor dos Aneis" maxLength={50} minLength={2}/>      
            </div>
            <div className="form-input">
                <label htmlFor="autor" >Autor(a): </label>
                  <input type="text" required id="autor"placeholder="Ex.: J. R. R. Tolkien" maxLength={50} minLength={3}/>
            </div>  
            <div className="form-input">
                <label htmlFor="genero" >Gênero: </label>
                  <input type="text" required id="genero" placeholder="Ex.: Fantasia" maxLength={20} minLength={3}/>
            </div>  
            <div className="form-input">
                <label htmlFor="data" >Data: </label>
                <input type="date" id="data" />
            </div>
              
            <button type="submit">Registrar</button>

        </form>
    </div>
  );
}