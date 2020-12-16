import {createUseStyles} from 'react-jss'

export const imageUploadStyles = createUseStyles({
    dropBoxWrapper: {
        border: '4px dashed #ccc',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '16px 0', 
        '@media only screen and (max-width: 769px)': {
            flexDirection: 'column',
        }
    },
    dropBoxSplit: {
        flex: "1 0 50%"
    },
});