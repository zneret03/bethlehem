import React from 'react';
import {Facebook, Twitter, Instagram, GitHub} from 'react-feather';
const Footer = () => {

    const socialIcons = [
        {
            id : 'fb',
            name : 'Facebook',
            icon : <Facebook className="mx-2 hover:text-white" size="18"/>,
            link : 'https://www.facebook.com/bcif.santabarbara',
        },
        {
            id : 'tw',
            name : 'Twitter',
            icon : <Twitter className="mx-2 hover:text-white" size="18"/>,
            link : ''
        },
        {
            id :'Instagram',
            name : 'Instagram',
            icon : <Instagram className="mx-2 hover:text-white" size="18"/>,
            link : ''
        },
        {
            id :'gh',
            name : 'Github',
            icon : <GitHub className="mx-2 hover:text-white" size="18"/>,
            link : 'https://github.com/zneret03/bethlehem'
        }
    ]

    return(
        <div className="w-screen font-sans" style={{backgroundColor : '#1E2427'}}>
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
                        {socialIcons.map((icons, index) => (
                            <ul key={index}>
                                <li className="border border-gray-700 hover:border-gray-200 rounded-full py-3 px-1 mx-1"><a href={icons.link}>{icons.icon}</a></li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;