import { PreloaderStyle } from '../commonComponents/MyPopover/MyPopoverStyle'

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
        ...PreloaderStyle
    })
}