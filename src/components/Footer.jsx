import React from 'react';
import {Facebook, Twitter, Instagram, GitHub} from 'react-feather';
const Footer = () => {

    return(
        <div className="w-screen" style={{backgroundColor : '#1E2427'}}>
            <div className="container mx-auto p-3 sm:flex sm:justify-between sm:items-center">
                <div className="sm:flex sm:items-center py-2">
                    <div className="h-10 px-6 flex justify-center">
                        <img src={require('../image/BcifFooter.svg')} alt=""/>
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-center" style={{color : '#8D7979'}}>
                        <h6>© 2020 Bethlehem Corner taft-montinola Sts., Sta. Barbara, Iloilo</h6>
                    </div>
                </div>
                <div className="font-bold sm:flex" style={{color : '#8D7979'}}>
                    <div className="flex justify-center">
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