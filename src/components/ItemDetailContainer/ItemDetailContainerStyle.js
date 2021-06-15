import { preloaderStyle } from '../commonComponents/Preloader/PreloaderStyle'

export const itemDetailContainerStyle = theme => {
    return ({
        itemDetailContainer: {
            display:'flex',
            justifyContent:'center',
            rowGap: '2rem'
            
        },
        ...preloaderStyle
    })
}

