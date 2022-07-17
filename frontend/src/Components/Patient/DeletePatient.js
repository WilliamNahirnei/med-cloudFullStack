import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from "notistack";

import { BsFillTrashFill } from 'react-icons/bs'

import { deletePatient } from '../../api/patient-api'

export default function DeletePatient(props) {
    const idPatient = props.idPatient
    const searchPatients = props.searchPatients

    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function callDeletePatient() {
        handleClose()
        try{
            const teste = await deletePatient(idPatient)
            positiveNotify()
            searchPatients()
        } catch(e) {
            if (e?.response?.data?.messages?.length > 0) {
                e?.response?.data?.messages?.forEach(message => {
                    negativeNotify(message)
                });
            } else
                negativeNotify('')
        }
    }

    const positiveNotify = () => {
          enqueueSnackbar('Paciente Deletado', {
            variant: "success",
            autoHideDuration: 5000
          });
      };

    const negativeNotify = (errorMessage = '') => {
        enqueueSnackbar(`Erro ao deletar o paciente. ${errorMessage}`, {
          variant: "error",
          autoHideDuration: 5000
        });
    };

    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={handleClickOpen}>
                <BsFillTrashFill />
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Você tem certeza que quer deletar este paciente"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deletar um Paciente é irreversivel, todos os dados serão perdidos.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button variant="outlined" color="error" onClick={callDeletePatient} autoFocus>
                        Deletar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
