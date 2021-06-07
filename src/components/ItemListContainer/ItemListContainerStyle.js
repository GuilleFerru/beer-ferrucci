export const itemListContainerStyle = theme => {
    return ({
        container: {
            //border: '1px solid blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            background: 'white',
            margin: '1rem 0 0',
            padding:'1rem',
            '& h5': {
                color: 'black',
                fontFamily: 'poppins',
                fontWeight: '500'
            },
            '@media (max-width: 800px)': {
                margin:'1rem auto 1rem auto'
                
            }
        }
    })
}

 //preguntar como se hace para poner el Typography