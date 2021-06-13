export const itemListStyle = theme => {
    return ({
        gridContainer: {
            display:'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            justifyItems: 'center',
            maxWidth:'100%',
            rowGap:'1rem',
            columnGap:'1rem',
            margin:'1rem'
        },
        preloaderContainer:{
            // border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }
    })
}