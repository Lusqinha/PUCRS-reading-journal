import { LocalStorageController } from '../../utils/controller';

export function BookList(...props) {
    const controller = new LocalStorageController("livros");

    const handleRemove = (index) => {
        
        if (window.confirm("Deseja realmente remover?")) {
            controller.remover(index);
            alert("Livro removido com sucesso!");
            window.location.reload();
        }
    }

    return (
        <ul>
            {props[0].dados.map((livro, index) => (
                <div>
                    <li key={index}>{livro.titulo} - {livro.autor} | {livro.genero} | {livro.data.split('-').reverse().join('/')}</li>
                        <button onClick={handleRemove}>Remover</button>
                </div>
            ))}
        </ul>
    );
}