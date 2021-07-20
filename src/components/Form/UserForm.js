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
    province: 'undefined',
    city: '',
    address: '',
    telephone: '',
    email: ''
}

export const UserForm = ({ closeDialog, createOrder }) => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues) {
            temp.name = fieldValues.name ? "" : "Por favor ingrese su nombre"
        }
        if ('lastname' in fieldValues) {
            temp.lastname = fieldValues.lastname ? "" : "Por favor ingrese su apellido"
        }
        if ('province' in fieldValues) {
            temp.province = fieldValues.province !== 'undefined' ? "" : "Por favor ingrese su Provincia"
        }
        if ('city' in fieldValues) {
            temp.city = fieldValues.city ? "" : "Por favor ingrese su Localidad"
        }
        if ('address' in fieldValues) {
            temp.address = fieldValues.address ? "" : "Por favor ingrese su dirección"
        }
        if ('telephone' in fieldValues) {
            temp.telephone = fieldValues.telephone ? "" : "Por favor ingrese su número telefonico"
        }
        if ('email' in fieldValues) {
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Por favor ingrese su email"
        }
        setErrors({ ...temp })

        if (fieldValues === values) {
            return Object.values(temp).every(error => error === "")
        }

    }

    const { values, errors, setErrors, handleChange, handleCountry } = UseForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            createOrder(values);
            closeDialog(false)
        }
    }

    const handleCancel = e => {
        e.preventDefault();
        closeDialog(false)
    }

    return <Form>
        <div>
            <Input
                autoFocus={true}
                required={true}
                fullWidth={true}
                label="Nombre"
                value={values.name}
                name="name"
                onChange={handleChange}
                error={errors.name}
            />

            <Input
                autoFocus={false}
                required={true}
                fullWidth={true}
                label="Apellido"
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                error={errors.lastname}
            />
        </div>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <Select
                label="Pais"
                required={true}
                value={values.country}
                name="country"
                onChange={handleCountry}
                options={countries}
            />
            <Select
                label="Provincia"
                required={true}
                value={values.province}
                name="province"
                onChange={handleChange}
                options={provinces.filter(province => province.value !== 'otherCountry')}
                disabled={values.country !== 'AR' ? true : false}
                error={values.country !=='AR' ? false : errors.province}
            />
            <Input
                autoFocus={false}
                required={true}
                label={values.country !== 'AR' ? 'Regíon/Ciudad' : 'Ciudad'}
                value={values.city}
                name="city"
                onChange={handleChange}
                error={errors.city}
            />
        </div>
        <div>
            <Input
                autoFocus={false}
                required={true}
                fullWidth={true}
                label="Direccion"
                value={values.address}
                name="address"
                onChange={handleChange}
                error={errors.address}
            />
            <Input
                autoFocus={false}
                required={true}
                fullWidth={true}
                label="Telefono"
                value={values.telephone}
                name="telephone"
                onChange={handleChange}
                error={errors.telephone}
            />
            <Input
                autoFocus={false}
                fullWidth={true}
                label="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                error={errors.email}
            />
        </div>
        <ButtonGroup
            handleConfirm={handleSubmit}
            handleClose={handleCancel}
            firstButton='Aceptar'
            secondButton='Cerrar'
        />
    </Form>
}
