export const itemCountStyle = () => {
    return ({
        itemCountContainer:{
            fontFamily: 'poppins',
            display:'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            color: '#666',
            fontWeight: '300',
            '& > button':{
                display:'flex',
                flexFlow:'row nowrap',
                justifyContent:'flex-start',
                alignItems:'center',
                columnGap:'1rem',
                padding:'0.5rem',
                fontFamily: 'poppins',
                fontWeight: '300',
                width: 'fit-content',
                backgroundColor: 'transparent',
                border: '1px solid black',
                cursor:'pointer',
                transition: '0.3s',
                '&:hover':{
                    backgroundColor: 'black',
                    color:'white'
                }
            }
        },
        cantidadInput:{
            display:'flex',
            alignItems:'center',
            columnGap: '1rem',
            
        },
        inputGroup: {      
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent:'center',
            height:'2.5rem',
            border: '1px solid #d7d7d7',
            '& > div > button':{
                display:'flex',
                alignItems:'center',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
            },
            '& > span':{
                border: 'transparent',
                width:'4.4rem',
                textAlign: 'center !important',
                fontSize:'1rem',        
                
            }
        }
    })
}