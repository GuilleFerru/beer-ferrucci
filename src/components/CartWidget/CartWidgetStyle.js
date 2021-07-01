export const cartWidgetStyle = theme => {
    return ({
        logoCarrito: {
            padding: '0.2rem',
            display: 'flex',
            ' & a':{
                textDecoration: 'none'
            }
        },
        carritoNombre: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'rgba(0, 0, 0, 0.36)',
            transition: '1s',
            '&:hover':{
                color: 'black'
            }
        },
        parrafoCarrito: {
            margin: '0',
            fontSize: '0.75rem'
        },
        carritoPrecio: {
            fontSize: '0.95rem'
        }
    })
}