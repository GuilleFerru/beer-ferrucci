import { preloaderStyle } from '../../styles/PreloaderStyle';
export const beersContainerStyle = theme => {
    return ({
        section:{
            display:'flex',
            flexFlow:'column noWrap',
            '&>div':{
                marginTop: '1rem'
            },
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