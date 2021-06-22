import {button} from '../../styles/ButtonStyle'
export const cartStyle = theme => {
    return ({
        estilosProvisorios:{
            display: 'flex',
            flexFlow: 'column wrap',
            padding: '2rem',
            ...button
        }
    })
}