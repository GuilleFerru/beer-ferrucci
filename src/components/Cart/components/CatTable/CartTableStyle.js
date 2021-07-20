export const cartTableStyle = theme => {
    return ({
        tableShop: {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '#777',
            fontFamily: "Poppins",
            fontWeight: '400',
            color: '#777',
            textTransform: 'none',
            '& thead': {

            },
            '& th': {
                fontWeight: '400',
                fontSize: '1.0rem',
                lineHeight: '1.5',
                color: '#999',
                padding: '1.4rem 1rem 1.4rem 0'
            },
            '& td': {
                borderColor: '#777',
                padding: '1.5rem 1rem 1.5rem 0',
                textAlign: 'center',
                color: 'white',
                '& button': {
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.5rem',
                    fontFamily: 'poppins',
                    width: 'fit-content',
                    backgroundColor: 'black',
                    cursor: 'pointer',
                    color: 'inherit',
                    '&:hover': {
                    }
                },
                '& img': {
                    width: 'fit-content',
                    height: 'auto'
                }
            }
        },
    })

}
