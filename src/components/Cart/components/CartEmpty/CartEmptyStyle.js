import { button } from '../../../../styles/ButtonStyle';
export const cartEmptyStyle = theme => {
    return ({
        cartEmptyContainer:{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            '& p':{
                fontFamily: "Poppins",
                fontWeight: '400',
                color: '#777',
                textTransform: 'none',
            }
        },
        carEmptyButtom: {
            margin: 'auto',
            display: 'flex',
            flexFlow: 'column nowrap',
            rowGap: '0.4rem',
            ...button

        }
    })
}