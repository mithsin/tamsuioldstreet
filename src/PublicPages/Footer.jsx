import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from "react-jss";
import { FooterStyles } from './styles';
import { socialList, copyRight } from 'StaticDatas';

const Footer = () => {
    const theme = useTheme();
    const classes = FooterStyles({ theme });

    return(
        <div className={classes.footerWrapper}>
            <div className={classes.footerInnerWrap}>
                <div>{copyRight}</div>
                <div className={classes.footerSocialBlock}>
                    {socialList.map((soc, index)=>{
                        return (
                            <a key={`${index}-social`} href={soc.link}>
                                <FontAwesomeIcon icon={soc.icon} className="fa-2x"/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;