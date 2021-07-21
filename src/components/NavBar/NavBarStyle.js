export const navBarStyle = theme => {
    return ({
        root: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: 'white',
            fontFamily: 'poppins',
            padding: '0.5rem 0.8rem 0',
            boxShadow: '-2px 2px 7px 0px rgba(0,0,0,0.75)',
        },
        innerWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logoContainerDesktop: {
            '@media (max-width: 800px)': {
                display: 'none'
            },
            '& img:hover':{
                transform: 'scale(1.1)',
                transition: '0.3s'
            },
        },
        listaContainerDesktop: {
            '@media (max-width: 800px)': {
                display: 'none'
            }
        },

        navbarList: {
            margin: '0.5rem 0',
            padding: '0',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            fontWeight: '500',
            fontSize:'1.2rem',
            '& li': {
                padding: '0.5rem',
                color: 'rgba(0, 0, 0, 0.70)',
                cursor: 'pointer',
                '& a':{
                    textDecoration: 'none',
                    color: 'inherit'
                }
            
            },
            '& li:hover':{
                transform: 'scale(1.05)',
                transition: '0.5s ease-in-out',
                color: 'black',
            },
            '@media (max-width: 800px)': {
                flexFlow: 'column nowrap'
            }
        },
        logoContainerMobile: {
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