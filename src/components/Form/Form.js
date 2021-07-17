import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { formStyle } from './FormStyle';

const useStyles = makeStyles((theme) => formStyle(theme));

export const UseForm = (initialFValues, validateOnChange = false, validate) => {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleProvince = e => {
        const { name, value } = e.target;
        if (value !== 'AR') {
            setValues({
                ...values,
                [name]:value,
                'province': 'undefined'
            })
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange) {
            validate({ [name]: value })
        }
    }



    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        handleProvince
    }
}

export const Form = (props) => {
    const classes = useStyles();


    return <form className={classes.container} autoComplete="off">
        {props.children}
    </form>


}
