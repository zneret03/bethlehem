import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
import { Parallax } from 'react-scroll-parallax';
class Ministries extends React.Component{
    render(){
        return(
            <div className="relative">
                {/**Desktop image */}
                <DesktopImage>
                    <img className="sm:object-cover sm:h-screen sm:w-screen" src={require('../image/MinistriesDesktop-min.png')} alt=""/>
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage>
                    <img className="object-cover h-screen w-screen xl:hidden" src={require('../image/MinistriesMobile-min.png')} alt=""/>
                </MobileImage>
                {/** content*/}
                <Content>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <div className="mt-20 text-white animated bounce">
                        <Paragraph title={'MINISTRIES'} color={'#242020'} 
                        heading={'Reaching Out, Reflecting Christ,'}
                        secondHeading={'Renewing Lives.'}
                        paragraph={"If you want to build a ship, don't drum up the.\
                        men to gather wood, divide the work, and give orders. Instead,  \
                        teach them to yearn for the vast endless sea."}
                        textMargin={'xl:mr-20'}/>
                    </div>
                    <div className="mt-12">
                        <Button buttonName={'MORE ABOUT MINISTRIES'}/>
                    </div>
                </Parallax>
                </Content>
            </div>
        )
    }
}

export default Ministries;