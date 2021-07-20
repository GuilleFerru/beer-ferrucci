import React from "react"
import { makeStyles, FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    textField: {
        marginRight: theme.spacing(2),
    }
}))

export const Select = (props) => {
    const classes = useStyles();
    const { name, label, value, error = null, onChange, options, disabled } = props;

    return <FormControl className={classes.textField} disabled={disabled} {...(error && {error:true})}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
            name={name}
            value={value}
            onChange={onChange}
        >
            {
                options.map((option, i) => (
                    <MenuItem key={i} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }

        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>

}
