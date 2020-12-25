import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderStyles } from './styles';
import { logoImg } from 'StaticDatas'

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
            <span className={classes.Logo} ><img onClick={()=> history.push('/')} src={logoImg} alt="logo"/></span>

            <ul className={classes.MenuList}>
                {
                    menuList.map((type, index)=> 
                        <li key={`${index}-link`} className={classes.MenuLi}  onClick={()=> history.push(type.link)}>
                            {type.title}
                        </li>)
                }
            </ul>
        </div>
    )
};

export default Header;