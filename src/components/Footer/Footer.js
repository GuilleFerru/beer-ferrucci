import React from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { footerStyle } from './FooterStyle';
import { Link } from 'react-router-dom';
import logo from '../../img/main_logo.png';
import Divider from '@material-ui/core/Divider';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => footerStyle(theme));
export const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.container}>
        <div>
            <div>
                < Link to={{pathname:"https://wa.me/543571419350"}} target="_blank"><WhatsAppIcon fontSize="large" /></Link>
                < Link to={{pathname:"https://www.instagram.com/cerveza_guendolina/" }} target="_blank"><InstagramIcon fontSize="large" /></Link>
            </div>
            <div>
                <Link to={'/'}>
                    <img src={logo} alt="Logo de la cerveceria"></img>
                </Link>
                <div>
                    <p> Güendolina Microcerveceria</p>
                    <p>  Fábrica de cerveza</p>
                    <p> Río Tercero - Cordoba 🇦🇷</p>
                </div>
            </div>
        </div>
        <Divider/>
        <div>
            <p>© Copyright 2021 Guillermo Ferrucci - Todos los Derechos Reservados</p>
        </div>
    </footer>

}

