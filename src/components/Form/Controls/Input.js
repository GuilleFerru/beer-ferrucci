import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    textField: {
        marginRight: theme.spacing(2),
        // width: '15ch',
    }
}))

export const Input = (props) => {
    const classes = useStyles();
    const { name, label, value, onChange, autoFocus, helperText,fullWidth, required} = props
    
    return <TextField className={classes.textField}
        autoFocus={autoFocus || false}
        fullWidth={fullWidth || false}
        required ={required || true}
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        helperText={helperText || ''}
    >
    </TextField>

}

