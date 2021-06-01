import React from 'react';
import '@fontsource/roboto';
import 'poppins-font';
import logo from '../../img/main_logo.png';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


/* Te dejo las dudas aca.. primero es como puedo poner ese icono en negro.. probe <AddShoppingCartTwoToneIcon color:"black" fontSize="large" /> y similares pero no me lo toma,
otra cosa que quiero hacer es al hacer hover sobre el icono se muestre el popupCarroVacio pero no se donde agregar el javascript para hacerlo*/

export const NavBar = () => {
    return <>
        <header>
            <nav>
                <div className="logoCabecera">
                    <a href="index.html">
                        <img src={logo} alt="Logo de la cerveceria"></img>
                    </a>
                </div>
                <ul className="listaCabecera">
                    <li>Gü-MARKET</li>
                    <li>Gü-PACKS</li>
                    <li>NUESTRAS CERVEZAS</li>
                    <li>CONTACTANOS</li>
                </ul>
                <div className="logoCarrito">
                    <a href="index.html" className="iconoCarrito">
                        <div className="carritoNombre">
                            <AddShoppingCartTwoToneIcon fontSize="large" />
                            <p className="parrafoCarrito">Carrito</p>
                        </div>
                    </a>
                    <span className="carritoPrecio">
                        <bdi>
                            <span>$</span>0.00
                        </bdi>
                    </span>
                    <div className="popupCarroVacio">
                        <div className="containerPopupCarroVacio"> 
                            <p>No hay productos en el carrito</p>
                        </div>
                    </div>
                </div>

            </nav>

        </header>

    </>
}