import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { 
    faFacebook,
    faInstagram,
    faPinterest,
    faYelp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const socialList = [{
        icon: faFacebook,
        link: '/faFacebook',
    },{
        icon: faInstagram,
        link: '/faInstagram',
    },{
        icon: faPinterest,
        link: '/faPinterest',
    },{
        icon: faYelp,
        link: '/faYelp',
    }];
{/* <FontAwesomeIcon icon={faChevronRight} className="fa-2x"/> */}
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