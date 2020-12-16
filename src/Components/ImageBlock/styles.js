import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    carouselWrapper: {
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
    },
    imageBlock: {
        maxWidth: '1200px',
        height: '65vh',
        margin: 'auto',
        boxShadow: 'white 0px 0px 12px 0px inset',
        borderRadius: '6px',
        '@media only screen and (max-width: 769px)': {
            width: '100%'
        },
    },
    prevBtn: {
        position: 'absolute',
        top: '50%',
        left: '50px',
        backgroundColor: '#ffffff33',
        borderRadius: '6px',
        '@media only screen and (max-width: 769px)': {
            top:'96%',
        }
    },
    nextBtn: {
        position: 'absolute',
        top: '50%',
        right: '50px',
        backgroundColor: '#ffffff33',
        borderRadius: '6px',
        '@media only screen and (max-width: 769px)': {
            top:'96%',
        }
    },
    ImgBKSnow: {
        position: 'absolute',
        width: '100%',
        top:'0',
        height: '15px',
        backgroundSize: '44px 15px',
        backgroundImage: `url(http://www.myichot.com/wp-content/uploads/2016/01/waves-top.png)`,
        backgroundRepeat: 'repeat',
    },
    ImgBKSnowBottom: {
        position: 'absolute',
        width: '100%',
        bottom:'0',
        height: '15px',
        backgroundSize: '44px 15px',
        backgroundImage: `url(http://www.myichot.com/wp-content/uploads/2016/01/waves-top.png)`,
        backgroundRepeat: 'repeat',
        transform: 'rotate(180deg)',
    },
})