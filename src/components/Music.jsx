import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
import { Parallax } from 'react-scroll-parallax';
class Music extends React.Component{
    render(){
        return(
            <div className="relative">
                {/**Desktop image */}
                <DesktopImage>
                    <img className="sm:object-cover sm:h-screen sm:w-screen" src={require('../image/MusicDesktop.png')} alt=""/>
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage>
                    <img className="object-cover h-screen w-screen xl:hidden" src={require('../image/MusicMobile.png')} alt=""/>
                </MobileImage>
                {/** content*/}
                <Content>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <div className="mt-20 text-white">
                        <Paragraph title={'MUSIC'} color={'#615151'} 
                        heading={'It’s All About God’s Presence'}
                        secondHeading={'Impact'}
                        paragraph={"Worship creates a space for us to experience the tangible.\
                        presence of our good Father. We believe it's what we're all  \
                        created for."}
                        textMargin={'xl:mr-20'}/>
                    </div>
                    <div className="mt-12">
                        <Button buttonName={'MORE ABOUT WORSHIP'}/>
                    </div>
                </Parallax>
                </Content>
            </div>
        )
    }
}

export default Music;