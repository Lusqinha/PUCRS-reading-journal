import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import './style.css';

export function NavBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <header>
            <div className="logo">
                <LocalLibraryIcon />
                <h1>PUCReading</h1>
            </div>

            <Button variant="contained" color="secondary"
                aria-controls={open ? 'menu-list' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id='menu-list'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                <MenuItem>
                    <Link className='menu-link' to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link className='menu-link' to="/sobre">Sobre</Link>
                </MenuItem>
                <MenuItem>
                    <Link className='menu-link' to="/livros">Lista de Livros</Link>
                </MenuItem>
                <MenuItem>
                    <Link className='menu-link' to="/cadastro/livro">Cadastrar Livro</Link>
                </MenuItem>
            </Menu>
        </header>
    );
}

