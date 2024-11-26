import { Typography } from "@mui/material";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './style.css';

export function Home() {
    return (
        <div className="hero">
            <div style={{display: 'flex', alignItems:'center'}}>
                <LocalLibraryIcon style={{fontSize: 80}}/>
            <Typography sx={{fontSize: 60, fontWeight: 800}} variant="h2" fontFamily={'Ysabeau Infant'}>PUCReading</Typography>
            </div>
            <p style={{fontSize: 25}}>Seja bem-vindo(a) ao sistema de registro de livros!</p>
        </div>
    );
}