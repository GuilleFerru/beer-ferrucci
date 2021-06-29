import { button } from '../../styles/ButtonStyle'
export const cartStyle = theme => {
    return ({
        container: {
            // border: '1px solid red',
            background: 'black',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            columnGap:'3rem',
            alignItems: 'flex-start',
            padding: '2rem',
            '& div:nth-child(1)':{
                overflowX:'auto'
            }
            
        },
        emptyCartContainer:{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            '& p':{
                fontFamily: "Poppins",
                fontWeight: '400',
                color: '#777',
                textTransform: 'none',
            }
        },
        tableShop: {
            // border: '1px solid red',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '#777',
            fontFamily: "Poppins",
            fontWeight: '400',
            color: '#777',
            textTransform: 'none',
            '& thead':{

            },
            '& th': {
                fontWeight: '400',
                fontSize: '1.4rem',
                lineHeight: '1.5',
                color: '#999',
                padding: '1.4rem 1rem 1.4rem 0'
            },
            '& td':{
                // borderTop: '1px solid',
                // borderBottom: '1px solid',
                borderColor: '#777',
                padding: '1.5rem 1rem 1.5rem 0',
                textAlign:'center',
                color:'white',
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
                    color:'inherit',
                    '&:hover': {
                    }
                },
                '& img':{
                    width:'fit-content',
                    height:'auto'
                }
            }
        },
        cartAside:{
            padding:'1rem',
            border: '1px dashed #d7d7d7',
            background:'#F9F9F9',
            display:'flex',
            flexFlow:'column nowrap',
            width:'20rem',

        },
        cartTotal:{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            '& h2':{
                lineHeight:'1.1',
                margin: '0 0 1.4rem',
                fontWeight:'300',
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
            }
        },
        buttonGroup:{
            margin:'auto',            
            display:'flex',
            flexFlow: 'column nowrap',
            rowGap: '0.4rem',
            ...button

        },
    })
}