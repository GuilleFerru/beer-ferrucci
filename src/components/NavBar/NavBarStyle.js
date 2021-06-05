export const navBarStyle = theme => {
    return ({
        header: {
            fontFamily: 'poppins',
            padding: '0.5rem 0.8rem 0',
            backgroundColor: 'white'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        listaCabecera: {
            margin: '0.5rem 0',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            fontWeight: '500',
            '& li': {
                padding: '0.5rem',
                color: 'black',
                cursor: 'pointer'
            }
        }
    })


}