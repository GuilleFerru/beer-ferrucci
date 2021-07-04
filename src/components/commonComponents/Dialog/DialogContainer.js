import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { DialogComponent } from './DialogComponent';

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
};

export const DialogContainer = props => {
    const [openDialog, setOpenDialog] = useState(false);

    return <div style={containerStyle}>
        <DialogComponent open={openDialog}
            
            openDialog={setOpenDialog}
            handleConfirm={() => setOpenDialog(false)}
            closeDialog={() => setOpenDialog(false)}
            title='Confirmar'
            firstButton='Cancelar'
            secondButton='Aceptar'
        >
            Hola soy un puto dialogo
        </DialogComponent>
        <Button onClick={e => setOpenDialog(true)}>Abrir Dialogo</Button>
    </div>
}