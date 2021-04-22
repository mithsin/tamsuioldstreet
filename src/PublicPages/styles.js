import {createUseStyles} from 'react-jss'

export const HeaderStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        maxWidth: '1440px',
        justifyContent: 'flex-start',
        margin: '0 auto',
        width: '100%',
    },
    Logo: {
        maxWidth: '9rem',
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
    wrapper: {
        display: 'flex',
        flexBasis: '1440px',
        flexDirection: 'column',
    },
    h1: {
        color: ({ theme }) => theme.text.primaryColor,
    },
    categoryWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '26px 0',
    },
    categoryList: {
        maxWidth: '1280px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        margin: 'auto',
        gap: '.5rem',
        width: '100%',
    },
    MenuOutterWrap: {
        padding: '8px',
        margin: 'auto',
        border: '1px dotted',
        maxWidth: '1240px',
    },
    '@media only screen and (max-width: 599px)': {
        CategoryList: {
            maxWidth: '1280px',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            margin: 'auto',
            gap: '0',
        },
    },
});

export const FooterStyles = createUseStyles({
    footerWrapper: {
        width: "100%",
    },
    footerInnerWrap: {
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 0px 4px 0px #818181",
        fontSize: "1rem",
    },
    footerSocialBlock: {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        flexBasis: "16rem",
    }
});