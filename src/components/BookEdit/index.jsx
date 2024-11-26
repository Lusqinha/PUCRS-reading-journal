import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import './style.css';

export function BookEdit({id}) {

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const [actualBook, setActualBook] = useState({});

    useEffect(() => {
        api.get(`/books/${id}`).then((response) => {
            setActualBook(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setActualBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function updateBook(id) {
        const { title, author, genre, readAt } = actualBook;

        const to_update = {
            id: id,
            title: title,
            author: author,
            genre: genre,
            readAt: readAt
        }

        setBooks([...books, to_update]);

        api.put(`/books/`, to_update).then((response) => {
            console.log(response.data);
            navigate('/livros');
        }
        ).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className='bookform-container'>     
            <form>
                <div className='bg-blur'></div>
                <h1>Atualização de Livros</h1>
                <TextField
                    id="titulo"
                    name="title"
                    label="Título"
                    variant="filled"
                    className='input-field'
                    color='secondary'
                    value={actualBook.title || ''}
                    onChange={handleChange}
                    focused
                    required
                />

                <TextField
                    id="autor"
                    name="author"
                    label="Autor(a)"
                    variant="filled"
                    className='input-field'
                    color='secondary'
                    value={actualBook.author || ''}
                    onChange={handleChange}
                    focused
                    required
                />

                <TextField
                    id="genero"
                    name="genre"
                    label="Gênero"
                    variant="filled"
                    className='input-field'
                    value={actualBook.genre || ''}
                    color='secondary'
                    onChange={handleChange}
                    focused
                    required
                />

                <TextField
                    id="data"
                    name="readAt"
                    type="date"
                    variant="filled"
                    className='input-field'
                    value={actualBook.readAt || ''}
                    color='secondary'
                    onChange={handleChange}
                    focused
                    required
                />

                <Button onClick={() => updateBook(actualBook.id)} variant='outlined' color='inherit' >Atualizar</Button>
            </form>
      </div>
  );
}