import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
// import Content from '../utils/Content';
// import Paragraph from '../utils/Paragraph';
// import Button from '../utils/Button';
// import { Parallax } from 'react-scroll-parallax';
class Church extends React.Component{   
    render(){
        return(
                <div className="relative">
                    {/**Desktop image */} 
                    <DesktopImage> 
                        <img className="sm:object-cover md:object-cover lg:object-cover xl:object-cover 
                        xl:w-screen xl:h-auto md:h-screen md:w-screen lg:h-screen lg:w-screen sm:h-screen sm:w-screen" 
                        src={require('../image/ServiceDesktop.png')} alt=""/>
                    </DesktopImage>
                    {/**Mobile image */}
                    <MobileImage>
                        <img className="object-contain h-screen w-screen xl:hidden" src={require('../image/ServiceMobile.png')} alt=""/>
                    </MobileImage>
                    <div className="flex justify-center flex-wrap items-center text-center">
                        <div className="text-white absolute top-0 font-bold mt-40 xl:mt-20">
                            <h1 className="uppercase text-6xl">service time</h1>
                            <h6 className="font-segoe-UI">SUN | 9:00 AM</h6>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Church;