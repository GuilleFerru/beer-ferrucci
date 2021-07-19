import { button } from '../../styles/ButtonStyle';
export const notFoundComponentStyle = theme => {
    return ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap:'1rem',
            fontFamily:'Poppins',
            '& > div': {
                position: 'relative',
                width: '100%',
                display: 'flex',
                
                justifyContent: 'center',
                '& > h1': {
                    position: 'absolute',
                    top: '5%',
                    fontFamily: 'monospace',
                    fontWeight: '700',
                    color: 'rgb(36, 43, 42)',
                    fontSize: '3.2em',
                    '& + img': {
                        marginTop: '1rem',
                        width: '100%',
                        height: 'auto'
                    }
                }
            },
            ...button
        }
    })

}