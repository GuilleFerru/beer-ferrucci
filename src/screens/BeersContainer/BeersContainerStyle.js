import { preloaderStyle } from '../../styles/PreloaderStyle';
export const beersContainerStyle = theme => {
    return ({
        section:{
            '&>div:nth-child(odd)':{
                backgroundColor:'#FAFAFA'
            },
            '&>div:nth-child(even)':{
                backgroundColor:'white'
            },
        },
        ...preloaderStyle,
    })
}