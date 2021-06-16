export const itemDetailStyle = theme => {
    return ({
        item: {
            // border: '1px solid blue',
            display: 'flex',
            flexFlow: 'row wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '1.5rem',
            width: 'fit-content',
            padding: '2rem',
            margin: '2rem',
            background: 'white',
            boxShadow: '-2px 2px 7px 0px rgba(0,0,0,0.75)',
            fontFamily: 'poppins',
            textTransform: 'uppercase',
            '@media (max-width: 800px)': {
                margin: '1rem auto 1rem auto'

            },
            '& img': {
                // border: '1px solid blue',
                maxWidth: '100%',
                height: 'auto',
                transition: '1.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1, 1.1)'
                }
            },

        },
        itemText: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignSelf:'flex-start',
            rowGap:'1rem',
            padding:'1rem',
            '& h1':{ 
                margin:'0rem'
            },
            '& span':{
                // border: '1px solid black',
                maxWidth:'25rem',
                color: '#666',
                fontWeight:'300',
                textAlign: 'justify',
                textHustify: 'inter-word',
                padding:'0'
            },
            '& p':{
                fontSize:'1.5rem',
                color: '#000',
                margin:'0',
                letterSpacing:'0px',
                
            }
        }
        
    })
}