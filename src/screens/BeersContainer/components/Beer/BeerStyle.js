export const beerStyle = theme => {
    return ({
        container: {
            padding:'2rem',

            '& a': {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: '2rem',
                cursor: 'pointer',
                '& img':{
                    maxWidth: '100%',
                    height: 'auto',
                }
            },      
            '& a, a:hover, a:focus, a:active  ': {
                textDecoration: 'none !important',
                color: 'inherit !important'
            }
        },
        itemText: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignSelf: 'center',
            padding: '2rem',
            width: '50%',
            '&>div': {
                paddingTop: '1rem',
                textAlign: 'justify',
                textJustify: 'inter-word'
            },
            '& h4': {
                fontFamily: 'Montserrat'
            },
            '& h5': {
                fontFamily: 'Poppins'
            },
            '& span': {
                padding: '0'
            },
            '& p': {
                color: '#666',
                margin: '0'
            }
        }
    })
}