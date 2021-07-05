export const formStyle = theme => {
    return ({
        container: {
            '& form': {
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '1em',
                '& > div:nth-child(4)': {
                    // border: '1px solid red',
                    display: 'flex',
                    flexFlow: 'row nowrap !important',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '0.5em'
                }
            }
        },
        textField: {
            marginRight: theme.spacing(2),
            // width: '15ch',
        },
    })
}