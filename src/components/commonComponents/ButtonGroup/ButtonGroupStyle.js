import {button} from '../../../styles/ButtonStyle'
export const buttonGroupStyle = theme =>{
    
    return({
        buttonGroup:{
            display: 'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            ...button

        },
    })
}