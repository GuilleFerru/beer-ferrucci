import React from 'react'; // siempre tiene que estar
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
//import '../../styles/NavBar.css';
import 'poppins-font';
import logo from '../../img/main_logo.png';
import { CartWidget } from '../CartWidget/CartWidget';

const useStyles = makeStyles((theme) => navBarStyle(theme));

//export es para poner disponible el componente
export const NavBar = () => {
    const classes = useStyles();

    return <>
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.logoCabecera}>
                    <a href="index.html">
                        <img src={logo} alt="Logo de la cerveceria"></img>
                    </a>
                </div>
                <ul className={classes.listaCabecera}>
                    <li>Gü-MARKET</li>
                    <li>Gü-PACKS</li>
                    <li>NUESTRAS CERVEZAS</li>
                    <li>CONTACTANOS</li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    </>
}