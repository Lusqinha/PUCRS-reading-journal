import { Modal, Box, Typography, Button } from '@mui/material';
import './style.css';

export function ConfirmModal({ title, description, onClickYes, onClickNo, open, handleClose }) {
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='modal-content' >
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ my: 2 }}>
                    {description}
                </Typography>
                <Button sx={{ mr: 3 }} variant='outlined' color='inherit' onClick={onClickYes}>Sim</Button>
                <Button variant='outlined' color='error' onClick={onClickNo}>Não</Button>
            </Box>
        </Modal>
    )
}