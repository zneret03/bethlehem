import React from 'react';
import {Facebook, Twitter, Instagram, GitHub} from 'react-feather';
const Footer = () => {

    return(
        <div style={{backgroundColor : '#1E2427'}}>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap sm:items-center">
                    <div className="w-32 my-2">
                        <img src={require('../image/BcifFooter.svg')} alt=""/>
                    </div>
                    <div className="font-bold text-xs sm:text-sm flex-1 flex-wrap" style={{color : '#8D7979'}}>
                        <h6>© 2020 Bethlehem Corner taft-montinola Sts., Sta. Barbara, Iloilo</h6>
                    </div>
                    <div className="font-bold self-end flex mx-auto sm:my-2 " style={{color : '#8D7979'}}>
                        <a href="https://www.facebook.com/bcif.santabarbara"><Facebook  className="mx-2" size="30"/></a>
                        <Twitter className="mx-2" size="30"/>
                       <Instagram className="mx-2" size="30"/>
                       <a href="https://github.com/zneret03/bethlehem"><GitHub className="mx-2" size="30"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;