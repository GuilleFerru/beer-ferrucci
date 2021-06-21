import React from 'react'; // siempre tiene que estar
import { Link } from 'react-router-dom';
import 'poppins-font';
import logo from '../../img/main_logo.png';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { navBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';


const useStyles = makeStyles((theme) => navBarStyle(theme));

const LogoNavbar = () => {
    return <Link aria-current="page" to={'/'}>
        <img src={logo} alt="Logo de la cerveceria"></img>
    </Link>
}

export const NavBar = () => {
    const classes = useStyles();
    const beerBottle = 'beerBottle';
    const sixPack = 'sixPack';

    return <>
        <header className={classes.container}>
            <nav className={classes.innerWrap}>
                <div className={classes.logoCabeceraDesktop}>
                    <LogoNavbar />
                </div>

                <div className={classes.listaContainerMobile}>
                    <button className={classes.mobileMenu}>
                        <MenuIcon fontSize="large" />
                    </button>
                </div>

                <div className={classes.logoCabeceraMobile}>
                    <LogoNavbar />
                </div>

                <div className={classes.listaContainerDesktop}>
                    <ul className={classes.listaCabeceraDesktop}>
                        <li><Link to={ `/category/${beerBottle}`}>Gü-MARKET</Link></li>
                        <li><Link to={`/category/${sixPack}`}>Gü-PACKS</Link></li>
                        <li>NUESTRAS CERVEZAS</li>
                        <li>CONTACTANOS</li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>
    </>
}