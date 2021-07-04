// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import 'poppins-font';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';
import { formStyle } from './FormStyle';


const initialInfo = {
    name: '',
    lastname: '',
    adress: '',
    telephone: '',
    email: ''
}

const useStyles = makeStyles((theme) => formStyle(theme));

export const Form = props => {
    const [userInfo, setUserInfo] = useState(initialInfo)
    const classes = useStyles();

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(()=>{
    //     console.log(userInfo)
    // },[userInfo])

    return <div className={classes.container}>
        <form autoComplete='off' noValidate>
            <TextField
                required
                label="Nombre"
                value={userInfo.name}
                multiline
                fullWidth
                margin="normal"
                name="name"
                onChange={handleChange}
                helperText="Ingrese su nombre completo"
            />
            <TextField
                required
                label="Apellido"
                value={userInfo.lastname}
                multiline
                fullWidth
                margin="normal"
                name="lastname"
                onChange={handleChange}
                helperText="Ingrese su apellido"
            />
            <TextField
                required
                label="Direccion"
                value={userInfo.adress}
                multiline
                fullWidth
                margin="normal"
                name="adress"
                onChange={handleChange}
                helperText="Ingrese la direccion de envio"
            />
            <TextField
                required
                label="Telefono"
                value={userInfo.telephone}
                multiline
                fullWidth
                margin="normal"
                name="telephone"
                onChange={handleChange}
                helperText="Ingrese su número"
            />
            <TextField
                required
                label="Email"
                value={userInfo.email}
                multiline
                fullWidth
                margin="normal"
                name="email"
                onChange={handleChange}
                helperText="Ingrese su email"
            />
        </form>
    </div>

}