import {createUseStyles} from 'react-jss'

export const HeaderStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexBasis: '1440px',
        justifyContent: 'flex-start',
    },
    Logo: {
        maxWidth: '150px',
        width: '100%',
        marginRight: '2rem',
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
        // backgroundColor: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
        padding: '8px',
        cursor: 'pointer',
        '& svg': {
            color: 'lightblue',
        }
    },
    wrapper: {
        display: 'flex',
        flexBasis: '1440px',
        flexDirection: 'column',
    },
    ImgBlock: {
        width: '100%',
        backgroundImage: `url(https://www.funnsnow.com/wp-content/uploads/2017/09/login-bg.jpg)`,
        backgroundRepeat: 'repeat',
        display: 'flex',
        justifyContent: 'center',
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
        // '@media only screen and (max-width: 960px) and (min-width: 600px)': {
        //     gridTemplateColumns: 'repeat(2, 1fr)',
        // },
        // '@media only screen and (max-width: 599px)': {
        //     gridTemplateColumns: 'auto',
        // }
    },
    MenuOutterWrap: {
        padding: '8px',
        margin: 'auto',
        border: '1px dotted',
        maxWidth: '1240px',
    }
});