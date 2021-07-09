// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import 'poppins-font';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import { formStyle } from './FormStyle';
import { ButtonGroup } from '../commonComponents/ButtonGroup/ButtonGroup';
import { countries } from '../../Services/Countries'
import { provinces } from '../../Services/Provinces';


const initialInfo = {
    name: '',
    lastname: '',
    country: 'AR',
    province: 'Córdoba',
    adress: '',
    telephone: '',
    email: ''

}

const useStyles = makeStyles((theme) => formStyle(theme));

export const Form = ({ closeDialog,  createOrder }) => {
    const [userInfo, setUserInfo] = useState(initialInfo)
    const classes = useStyles();

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createOrder(userInfo);
        closeDialog(false)

    }

    const handleCancel = e => {
        e.preventDefault();
        closeDialog(false)
    }

    return <div className={classes.container}>
        <form autoComplete='off' noValidate>
            <div>
                <TextField
                    autoFocus
                    required
                    label="Nombre"
                    value={userInfo.name}
                    margin="normal"
                    name="name"
                    onChange={handleChange}
                    helperText="Ingrese su nombre completo"
                    className={classes.textField}
                />
                <TextField
                    required
                    label="Apellido"
                    value={userInfo.lastname}
                    margin="normal"
                    name="lastname"
                    onChange={handleChange}
                    helperText="Ingrese su apellido"
                    className={classes.textField}
                />
            </div>
            <div>
                <TextField
                    select
                    label="Pais"
                    margin="normal"
                    name="country"
                    value={userInfo.country}
                    onChange={handleChange}
                    helperText="Seleccione Pais"
                    className={classes.textField}
                >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Provincia"
                    margin="normal"
                    name="province"
                    value={userInfo.province}
                    onChange={handleChange}
                    helperText="Seleccione Pais"
                    disabled={userInfo.country !== 'AR' ? true : false}
                    className={classes.textField}
                >
                    {provinces.map((option) => (
                        <MenuItem key={option.id} value={option.nombre}>
                            {option.nombre}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    label="Direccion"
                    value={userInfo.adress}
                    margin="normal"
                    name="adress"
                    onChange={handleChange}
                    helperText="Ingrese la direccion de envio"
                    className={classes.textField}
                />
            </div>
            <div>
                <TextField
                    required
                    label="Telefono"
                    value={userInfo.telephone}
                    fullWidth
                    name="telephone"
                    onChange={handleChange}
                    helperText="Ingrese su número"
                    className={classes.textField}
                />
                <TextField
                    required
                    label="Email"
                    value={userInfo.email}
                    fullWidth
                    name="email"
                    onChange={handleChange}
                    helperText="Ingrese su email"
                    className={classes.textField}
                />
            </div>
            <ButtonGroup
                handleConfirm={handleSubmit}
                handleClose={handleCancel}
                firstButton='Aceptar'
                secondButton='Cerrar'
            />

        </form>
    </div>

}