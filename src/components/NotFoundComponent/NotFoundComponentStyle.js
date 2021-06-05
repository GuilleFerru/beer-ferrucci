export const notFoundComponentStyle = theme => {
    return ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& > div': {
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                '& > h1': {
                    position: 'absolute',
                    top: '10%',
                    fontFamily: 'Indie Flower, cursive',
                    fontWeight: '700',
                    color: 'rgb(36, 43, 42)',
                    '& + img': {
                        width: 'clamp(32em,60vw,100em)',
                        '@media (max-width: 700px) and (orientation: landscape)': {
                            width: 'clamp(32em,60vw,100em)'
                        }
                    }
                }
            },
            '& button': {
                alignSelf: 'center',
                marginTop: '1em',
                fontSize: '1.2em',
                borderRadius: '20px',
                backgroundColor: 'black',
                color: 'white',
                padding: '0.5em 1em',
                border: 'none',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.9s ease',
                '& > span': {
                    textTransform: 'capitalize',
                },
                '&:hover': {
                    opacity: '0.9',
                    backgroundColor: 'white',
                    color: 'black'
                }
            }
        }
    })

}