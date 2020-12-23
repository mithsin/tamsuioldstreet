import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderStyles } from './styles';

const Header = () => {
    const history = useHistory();
    const classes = HeaderStyles();
    const menuList = [{
        title: "Shout Out",
        link: "/shout-out",
    },{
        title: "Photos",
        link: "/potos"
    }];

    return(
        <div className={classes.wrapper}>
            <span className={classes.Logo} ><img onClick={()=> history.push('/')} src="http://www.myichot.com/wp-content/uploads/2016/08/logo2.png" alt="logo"/></span>

            <ul className={classes.MenuList}>
                {
                    menuList.map((type, index)=> 
                        <li key={`${index}-link`} className={classes.MenuLi}  onClick={()=> history.push(type.link)}>
                            {type.title}
                        </li>)
                }
                {/* <li><a className={classes.MenuLi} href="https://www.clover.com/online-ordering/ic-hot-kennesaw">ORDER ONLINE</a></li> */}
            </ul>
        </div>
    )
};

export default Header;