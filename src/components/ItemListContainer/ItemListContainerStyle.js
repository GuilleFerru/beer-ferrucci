export const itemListContainerStyle = theme => {
    return ({
        container: {
            //border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            margin: '1rem 0 0',
            '& h5': {
                color: 'white',
                fontFamily: 'poppins',
                fontWeight: '500'
            },
            '@media (max-width: 800px)': {
                
            }
        }
    })
}

 //preguntar como se hace para poner el Typography