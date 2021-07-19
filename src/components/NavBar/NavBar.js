import React, { useState, useContext } from 'react'; // siempre tiene que estar
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import 'poppins-font';
import logo from '../../img/main_logo.png';
import { makeStyles, AppBar, Toolbar, Menu, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { navBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';
import { categories } from '../../Services/callByCategory';


const useStyles = makeStyles((theme) => navBarStyle(theme));
const firstCategory = categories[0].value;
const secondCategory = categories[1].value;


const ListContainerForMobile = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const mobileMenuOpen = Boolean(anchorEl);
    const menuId = 'navigation-for-mobile';

    const handleMobileMenuClose = () => {
        setAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const menuMobile = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <div className={classes.listaContainerMobile}>
                <ListContainerNavbar />
            </div>
        </Menu>
    )

    return <div className={classes.listaContainerMobile}>
        <IconButton
            aria-label="show more"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
        >
            <MenuIcon fontSize="large" />
        </IconButton>
        {menuMobile}
    </div>
}

const ListContainerNavbar = () => {
    const classes = useStyles();
    return <ul className={classes.navbarList}>
        <li><Link to={`/category/${firstCategory}`}>Gü-MARKET</Link></li>
        <li><Link to={`/category/${secondCategory}`}>Gü-PACKS</Link></li>
        <li><Link to={`/beers`}>NUESTRAS CERVEZAS</Link></li>
    </ul>
}

const LogoNavbar = () => {
    return <Link aria-current="page" to={'/'}>
        <img src={logo} alt="Logo de la cerveceria"></img>
    </Link>
}

export const NavBar = () => {
    const classes = useStyles();
    const { items } = useContext(CartContext);

    return <div>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.innerWrap}>
                <div className={classes.logoContainerDesktop}>
                    <LogoNavbar />
                </div>
                <div className={classes.listaContainerMobile}>
                    <ListContainerForMobile />
                </div>
                <div className={classes.logoContainerMobile}>
                    <LogoNavbar />
                </div>
                <div className={classes.listaContainerDesktop}>
                    <ListContainerNavbar />
                </div>
                {items.length === 0 ? <div></div> : <CartWidget />}
            </Toolbar>
        </AppBar>

    </div>

}