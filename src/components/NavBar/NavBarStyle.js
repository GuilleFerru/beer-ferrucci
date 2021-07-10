export const navBarStyle = theme => {
    return ({
        container: {
            fontFamily: 'poppins',
            padding: '0.5rem 0.8rem 0',
            backgroundColor: 'white',
        },
        innerWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logoCabeceraDesktop: {
            '@media (max-width: 800px)': {
                display: 'none'
            }
        },
        listaContainerDesktop: {
            '@media (max-width: 800px)': {
                display: 'none'
            }
        },
        listaCabeceraDesktop: {
            margin: '0.5rem 0',
            padding: '0',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            fontWeight: '500',
            '& li': {
                padding: '0.5rem',
                color: 'black',
                cursor: 'pointer',
                '& a':{
                    textDecoration: 'none',
                    color: 'inherit'
                }
            
            }
        },
        logoCabeceraMobile: {
            display: 'none',
            '@media (max-width: 800px)': {
                display: 'flex'
            }
        },
        listaContainerMobile: {
            display: 'none',
            '@media (max-width: 800px)': {
                display: 'flex'
            },
            '& > button':{
                border: 'none',
                background: 'none',
                color: 'rgba(0, 0, 0, 0.36)'
            }
        }
    })


}