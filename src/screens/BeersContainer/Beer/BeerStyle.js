export const beerStyle = theme => {
    return ({
        container: {
            display:'flex',
            flexFlow:'row nowrap',
            justifyContent:'center',
            alignItems:'center',
            columnGap: '2rem',
            cursor: 'pointer',
        },
        itemText: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignSelf:'flex-start',
            padding:'1rem',
            width:'50%',
            '&>div':{
                textAlign:'justify',
                textJustify:'inter-word'
            },
            '& h3':{
                margin:'0'
            },
            '& span':{
                padding:'0'
            },
            '& p':{
                color: '#ef837b',
                margin:'0'
            }
        }
    })
}