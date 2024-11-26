import { TextField, Button } from '@mui/material';
import { ConfirmModal } from '../ConfirmModal';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useState } from 'react';
import './style.css';

export function BookForm() {

    const [books, setBooks] = useState([]);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false)};


    
    function saveBook() {
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const data = document.getElementById('data').value;
        
        const to_save = {
            title: titulo,
            author: autor,
            genre: genero,
            readAt: data
        }

        setBooks([...books, to_save]);

        api.post('/books', to_save).then((response) => {
            handleOpen();
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error);
        })

        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('genero').value = '';
        document.getElementById('data').value = '';       

    }

    return (
        <div className='bookform-container'>     
            <form>
                <div className='bg-blur'></div>
                <h1>Cadastro de Livros</h1>
                <TextField
                    id="titulo"
                    label="Título"
                    variant="outlined"
                    className='input-field'
                    color='secondary'
                    required
                />

                <TextField
                    id="autor"
                    label="Autor(a)"
                    variant="outlined"
                    className='input-field'
                    color='secondary'
                    required
                />

                <TextField
                    id="genero"
                    label="Gênero"
                    variant="outlined"
                    className='input-field'
                    color='secondary'
                    required
                />

                <TextField
                    id="data"
                    type="date"
                    variant="outlined"
                    className='input-field'
                    color='secondary'
                    required
                />

                <Button onClick={saveBook} variant='outlined' color='inherit' >Cadastrar</Button>
                <ConfirmModal 
                    title='Livro cadastrado com sucesso!'
                    description='Deseja cadastrar outro livro?'
                    open={open}
                    handleClose={handleClose}
                    onClickNo={() => navigate('/livros') }
                    onClickYes={handleClose}
                />
            </form>

            
        </div>
    )
}