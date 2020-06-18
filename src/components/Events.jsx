import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
import { Parallax } from 'react-scroll-parallax';
class Events extends React.Component{
    render(){

        const content = [
                <Content>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <div className="mt-20 text-white">
                        <Paragraph title={'EVENTS'} color={'#ACACAC'} 
                        heading={'Gather With Us'}
                        paragraph={"We're so honored to host people from around the world \
                        every week. We'd love for you to visit us for an event or   \
                        weekend service."}
                        textMargin={'xl:mr-20'}/>
                    </div>
                    <div className="mt-12 flex flex-wrap">
                        <Button buttonName={'MORE ABOUT EVENTS'}/>
                    </div>
                </Parallax>
                </Content>
        ]

        return(
            <div>
                {/**Desktop image */}
                <DesktopImage image={'EventsDesktop-min.png'}>
                   {content}
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage image={'EventsMobile-min.png'}>
                    {content}
                </MobileImage>
            </div>
        )
    }
}

export default Events;