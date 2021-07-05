export const dialogComponentStyle = theme => {
    return ({
        container: {
            '& .MuiPaper-root': {
                padding: '1em !important',
                borderRadius: '1em !important',
                fontFamily: 'poppins !important',
            },
            '& .MuiDialogTitle-root': {
                paddingBottom: '0 !important',
                fontFamily: 'poppins !important',
            },
            '& .MuiDialogActions-root': {
                fontFamily: 'poppins !important',
                marginTop: '1em'
            }
        }
    })
}