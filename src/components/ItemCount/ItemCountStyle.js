export const itemCountStyle = () => {
    return ({
        itemCountContainer:{
            fontFamily: 'poppins',
            //border: '1px solid red',
            display:'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            '& > button':{
                display:'flex',
                flexFlow:'row nowrap',
                justifyContent:'flex-start',
                alignItems:'center',
                columnGap:'1rem',
                padding:'0.5rem',
                fontFamily: 'poppins',
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
            columnGap: '1rem'
        },
        inputGroup: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent:'center',
            border: '1px solid #d7d7d7',
            
            '& > div > button':{
                display:'flex',
                alignItems:'center',
                border: 'transparent',
                cursor: 'pointer'
                
            },
            '& > input':{
                border: 'transparent',
                textAlign: 'center',
                fontSize:'1,4rem',        
                
            }
        }
    })
}