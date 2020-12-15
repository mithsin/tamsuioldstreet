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
    },
});

export const homeStyles = createUseStyles({
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
    CategoryList: {
        maxWdith: '1280px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '1200px',
        margin: 'auto',
        '@media only screen and (max-width: 960px) and (min-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media only screen and (max-width: 599px)': {
            gridTemplateColumns: 'auto',
        }
    },
});