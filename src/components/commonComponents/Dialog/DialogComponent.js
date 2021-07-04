import React from 'react';
import 'poppins-font';
import { makeStyles, DialogTitle, DialogContent, DialogActions, Dialog } from '@material-ui/core'
import { dialogComponentStyle } from './DialogComponentSytle';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

const useStyles = makeStyles((theme) => dialogComponentStyle(theme));

export const DialogComponent = props => {
    const { open, openDialog, title, children, firstButton, secondButton, handleConfirm, closeDialog } = props;
    const classes = useStyles();

    const handleClose = () => {
        if (closeDialog) {
            closeDialog();
        }
        openDialog(false);
    }

    return <Dialog className={classes.container} open={open} onClose={handleClose} aria-labelledby={'form-dialog-title'}>
        <DialogTitle id="form-dialog-title" style={{ paddingBottom: '0 !important' }}>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row wrap' }}>
            <ButtonGroup  handleConfirm={handleConfirm} 
            handleClose={handleClose} 
            firstButton={firstButton} 
            secondButton={secondButton}
            />
        </DialogActions>
    </Dialog >

}