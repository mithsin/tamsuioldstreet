import {createUseStyles} from 'react-jss'

export const HeaderStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        maxWidth: '1440px',
        justifyContent: 'flex-start',
    },
    Logo: {
        maxWidth: '150px',
        width: '100%',
        marginRight: '2rem',
        cursor: 'pointer',
        '& img': {
            width: '100%',
        }
    },
    MenuList: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'flex-end',
    },
    MenuLi: {
        fontSize: '1.5rem',
        marginRight: '1rem',
        cursor: 'pointer',
        '&:hover': {
            borderBottom: '3px solid #81bed2',
        },
    },
});

export const homeStyles = createUseStyles({
    HomeOrderOnline: {
        position: 'fixed',
        right: '0px',
        top: '26px',
        zIndex: '99',
        fontWeight: '600',
        fontSize: '1.5rem',
        border: '1px dotted black',
        backgroundColor: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
        padding: '8px',
    },
    HomeOrderOnlineSpan: {
        position: 'fixed',
        right: '16px',
        top: '50px',
        zIndex: '99',
        fontWeight: '600',
        fontSize: '1.5rem',
        border: '1px dotted black',
        backgroundColor: '#ffffff33',
        textDecoration: 'none',
        borderRadius: '6px',
        padding: '8px',
        cursor: 'pointer',
        '& p': {
            position: 'absolute',
            top: '0',
            right: '0',
            margin: '0',
        },
        '& svg': {
            color: 'lightblue',
        }
    },
    wrapper: {
        display: 'flex',
        flexBasis: '1440px',
        flexDirection: 'column',
    },
    CategoryWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '26px 0',
    },
    CategoryList: {
        maxWdith: '1280px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '1200px',
        margin: 'auto',
    },
    MenuOutterWrap: {
        padding: '8px',
        margin: 'auto',
        border: '1px dotted',
        maxWidth: '1240px',
    }
});