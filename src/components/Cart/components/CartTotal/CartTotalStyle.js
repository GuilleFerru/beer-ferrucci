export const cartTotalStyle = theme => {
    return ({
        cartAside:{
                padding:'1rem',
                border: '1px dashed #d7d7d7',
                background:'#F9F9F9',
                display:'flex',
                flexFlow:'column nowrap',
                width:'20rem',
                '& > div:nth-child(2)':{
                    margin: 'auto'
                }
            },
            cartTotal:{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom:'1rem',
                '& h2':{
                    lineHeight:'1.1',
                    margin: '0 0 0.5rem',
                    fontWeight:'500',
                    fontSize:'1.4rem'
                },
                '& > div':{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& p':{
                        width: '12rem'
                    }
                },
                '& > div:nth-child(3)':{
                    marginTop: '1rem'
                },
                '& hr': {
                    width: '100%',
                }
            },
    })

}