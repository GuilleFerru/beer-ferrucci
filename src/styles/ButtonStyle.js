export const button = {
    '& button': {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '1rem',
        padding: '0.5rem',
        fontFamily: 'poppins',
        fontWeight: '300',
        width: '10rem',
        backgroundColor: 'white',
        border: '1px solid black',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        }
    }
}