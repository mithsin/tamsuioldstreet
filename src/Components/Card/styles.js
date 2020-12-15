import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

export const CardItemStyle = createUseStyles({
    CardItem: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: '0px',
        padding: '8px'
    },
    CardImgWrapper: {
        height: '70%',
    },
    img: {
        width: '100%',
    },
    CardLocationLi: {
        display: 'flex',
        justifyContent: 'space-between',
        '& span:first-child': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
        },
        '& span:last-child': {
            fontSize: '12px',
        },
    },
    CardTitleLi: {
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: '600',
        margin: '16px',
        display: 'flex',
        flexDirection: 'column',
        '& span': {
            textAlign: 'center',
            fontSize: '16px',
            fontFamily: 'Caveat, cursive',
        }
    },
    CardBtnWrapper: {
        margin: '8px 0',
    },
    CardByLi: {
        fontSize: '12px',
        fontWeight: '600',
        display: 'flex',
        justifyContent: 'flex-end'
    },
});
