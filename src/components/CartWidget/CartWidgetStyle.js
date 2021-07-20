export const cartWidgetStyle = theme => {
    return ({
        logoCarrito: {
            padding: '0.2rem',
            display: 'flex',
            justifyContent:'center',
            alignItems:'flex-start',
            ' & a':{
                textDecoration: 'none'
            },

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
            paddingTop:'0.2rem',
            fontSize: '1.05rem',
            color: 'rgba(0, 0, 0, 0.36)',
            fontWeight:'600',
            transition: '1s',
            '&:hover':{
                color: 'black'
            }
            
        }
    })
}