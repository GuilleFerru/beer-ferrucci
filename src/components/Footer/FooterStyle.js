export const footerStyle = theme => {
    return ({
        container: {
            fontFamily: 'poppins',
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '0.5rem 0.8rem 0',
            boxShadow: '-2px 2px 7px 0px rgba(0,0,0,0.75)',
            color: 'black',
            '&>div:nth-child(1)': {
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                padding: '0.2rem',
                '&>div:nth-child(1)': {
                    '& a': {
                        textDecoration: 'none',
                        color: 'inherit'
                    },
                    '& svg:hover': {
                        transform: 'scale(0.9)',
                        transition: '0.3s'
                    }
                },
                '&>div:nth-child(2)': {
                    display: 'flex',
                    flexFlow: 'column noWrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '& img:hover': {
                        transform: 'scale(0.9)',
                        transition: '0.3s'
                    },
                    '& div': {
                        display: 'flex',
                        flexFlow: 'column noWrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& p': {
                            margin: '0px',
                        },
                        '&>p:nth-child(1)': {
                            fontWeight: 'bold'
                        }
                    }
                }

            },
            '&>div:nth-child(3)': {
                '& p': {
                    textAlign: 'center',
                    textJustify: 'inter-word'
                }
            },
            '& hr': {
                width: '100%',
            }
        }
    })
}