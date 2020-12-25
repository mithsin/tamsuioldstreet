import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { socialList } from 'StaticDatas';

const Footer = () => {
    return(
        <div className="Footer">
            <div>Copyright © 2016 IC HOT.</div>
            <div className="Footer-Social-Block">
                {socialList.map((soc, index)=>{
                    return (
                        <a key={`${index}-social`} href={soc.link}>
                            <FontAwesomeIcon icon={soc.icon} className="fa-2x"/>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default Footer;