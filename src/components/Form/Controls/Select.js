import React from "react"
import { makeStyles, FormControl, InputLabel, Select as MuiSelect, MenuItem } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    textField: {
        marginRight: theme.spacing(2),
    }
}))

export const Select = (props) => {
    const classes = useStyles();
    const { name, label, value, onChange, options, disabled} = props;

    return <FormControl className={classes.textField} disabled={disabled}>
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
    </FormControl>

}
