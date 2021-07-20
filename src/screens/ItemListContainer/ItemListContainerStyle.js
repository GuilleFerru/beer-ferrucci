import { preloaderStyle } from '../../styles/PreloaderStyle';
export const itemListContainerStyle = theme => {
    return ({
        itemListContainer: {
            display:'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            justifyItems: 'center',
            maxWidth:'100%',
            rowGap:'1rem',
            columnGap:'1rem',
            margin:'1rem',
            '@media(max-width:926px)':{
                gridTemplateColumns:'repeat(2,1fr)'
            },
            '@media(max-width:600px)':{
                gridTemplateColumns:'repeat(1,1fr)'
            }
        },
        ...preloaderStyle
    })
}

