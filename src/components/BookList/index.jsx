import AutoStoriesIcon from '@mui/icons-material/AutoStories'; 
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/format_date';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
    Card, CardHeader, CardContent,
    CardActionArea, CardActions
} from "@mui/material";
import './style.css';

import { ConfirmModal } from '../ConfirmModal';

export function BookList() {

    const [open, setOpen] = useState(false);
    const [livros, setLivros] = useState();
    const [id, setId] = useState();

    const handleOpen = (id) => {setOpen(true); setId(id)};
    const handleClose = () => { setOpen(false) };
    
    const navigate = useNavigate();

    const handleGet = () => {
        api.get('/books').then((response) => setLivros(response.data))
            .catch((error) => {
                console.log(error);
            });
    }

    const handleDelete = (id) => { 
        api.delete(`/books/${id}`).then(() => {
            handleGet();
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleUpdate = (id) => { 
        navigate(`/atualizacao/livro/${id}`);
    }

    useEffect(() => {
        handleGet();
    }, []);

    return (
        <ul className='book-grid'>
            {livros?.map((livro) => (
                <Card key={livro.id} variant="elevation" className="card">
                    <div className='card-data'>
                        <CardHeader classes={{ title: 'card-title' }}
                            avatar={<AutoStoriesIcon />}
                            title={livro.title}></CardHeader>
                        <CardContent>
                            <p>Autor(a): {livro.author}</p>
                            <p>Gênero: {livro.genre}</p>
                            <p>Lido em: {formatDate(livro.readAt)}</p>
                        </CardContent>
                    </div>
                        <CardActions>
                        <CardActionArea className='card-action'>
                                <Button size="small" color="error" onClick={() => handleOpen(livro.id)}>
                                    < DeleteIcon />
                                </Button>
                                <Button size="small" color="inherit" onClick={() => handleUpdate(livro.id)} >
                                    < EditIcon />
                                </Button>
                            </CardActionArea>
                        </CardActions>
                </Card>
            ))}

            <ConfirmModal
                open={open} handleClose={handleClose}
                title={'Confirmar'}
                description={'Você tem certeza que deseja excluir este livro?'}
                onClickNo={handleClose}
                onClickYes={() => { handleDelete(id); handleClose()}}
            />
        </ul>
    );
}