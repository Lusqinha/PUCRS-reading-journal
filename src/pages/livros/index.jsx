import { BookList } from "../../components/BookList";



export function Livros() {
    return (
        <div>
            <h1 style={styles.title} >Leituras Registradas</h1>
            <BookList/>
        </div>
    );
}

const styles = {
    'title': {
        'textAlign': 'center',
        'fontSize': '2.8rem',
        'fontFamily': 'Ysabeau Infant',
        'fontWeight': 'bold',
    }
}