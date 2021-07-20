import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    textField: {
        marginRight: theme.spacing(2),
    }
}))

export const Input = (props) => {
    const classes = useStyles();
    const { name, label, value, onChange, autoFocus, error = null, fullWidth, required } = props

    return <TextField className={classes.textField}
        autoFocus={autoFocus || false}
        fullWidth={fullWidth || false}
        required={required || false}
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
    >
    </TextField>

}

