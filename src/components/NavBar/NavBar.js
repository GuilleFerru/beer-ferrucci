import React from 'react'; // siempre tiene que estar
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import 'poppins-font';
import logo from '../../img/main_logo.png';
import { CartWidget } from '../CartWidget/CartWidget';

const useStyles = makeStyles((theme) => navBarStyle(theme));

//export es para poner disponible el componente
export const NavBar = () => {
    const classes = useStyles();

    return <>
        <header className={classes.container}>
            <nav className={classes.innerWrap}>
                <div className={classes.logoCabeceraDesktop}>
                    <a href="index.html">
                        <img src={logo} alt="Logo de la cerveceria"></img>
                    </a>
                </div>

                <div className={classes.listaContainerMobile}>
                    <button className={classes.mobileMenu}>
                        <MenuIcon fontSize="large"/>
                    </button>
                </div>

                <div className={classes.logoCabeceraMobile}>
                    <a href="index.html">
                        <img src={logo} alt="Logo de la cerveceria"></img>
                    </a>
                </div>

                <div className={classes.listaContainerDesktop}>
                    <ul className={classes.listaCabeceraDesktop}>
                        <li>Gü-MARKET</li>
                        <li>Gü-PACKS</li>
                        <li>NUESTRAS CERVEZAS</li>
                        <li>CONTACTANOS</li>
                    </ul>
                </div>

                <CartWidget />
            </nav>
        </header>
    </>
}