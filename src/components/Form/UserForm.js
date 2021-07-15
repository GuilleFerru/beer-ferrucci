import React from 'react';
import 'poppins-font';
import { ButtonGroup } from '../commonComponents/ButtonGroup/ButtonGroup';
import { countries } from '../../Services/Countries'
import { provinces } from '../../Services/Provinces';
import { UseForm, Form } from './Form';
import { Input } from './Controls/Input';
import { Select } from './Controls/Select';




const initialFValues = {
    name: '',
    lastname: '',
    country: 'AR',
    province: 'CB',
    address: '',
    telephone: '',
    email: ''
}

export const UserForm = ({ closeDialog, createOrder }) => {
    

    const { values, handleChange} = UseForm(initialFValues);

    const handleSubmit = e => {
        e.preventDefault();
        createOrder(values);
        closeDialog(false)
    }

    const handleCancel = e => {
        e.preventDefault();
        closeDialog(false)
    }

    return <Form>
        <div>
            <Input
                autoFocus={true}
                label="Nombre"
                value={values.name}
                name="name"
                onChange={handleChange}
                helperText="Ingrese su nombre completo"
            />

            <Input
                autoFocus={false}
                label="Apellido"
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                helperText="Ingrese su apellido"
            />
        </div>
        <div>
            <Select
                label="Pais"
                value={values.country}
                name="country"
                onChange={handleChange}
                options={countries}
            />

            <Select
                label="Provincia"
                value={values.province}
                name="province"
                onChange={handleChange}
                options={provinces}
            />

            <Input
                autoFocus={false}
                label="Direccion"
                value={values.address}
                name="address"
                onChange={handleChange}
                helperText="Ingrese la direccion de envio"
            />
        </div>
        <div>
            <Input
                autoFocus={false}
                fullWidth={true}
                label="Telefono"
                value={values.telephone}
                name="telephone"
                onChange={handleChange}
                helperText="Ingrese su número"
            />
            <Input
                autoFocus={false}
                fullWidth={true}
                label="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                helperText="Ingrese su email"
            />
        </div>
        <ButtonGroup
            handleConfirm={handleSubmit}
            handleClose={handleCancel}
            firstButton='Aceptar'
            secondButton='Cerrar'
        // disabled={values.name === '' || values.lastname === '' || values.address === '' || values.telephone === '' || values.email === ''}
        />
    </Form>
}
