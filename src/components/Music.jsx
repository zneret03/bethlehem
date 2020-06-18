import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
class Music extends React.Component{
    render(){
        
        const content = [
            <Content>
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
            </Content>
        ]

        return(
            <div id="music">
                {/**Desktop image */}
                <DesktopImage image={'MusicDesktop-min.png'}>
                  {content}
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage image={'MusicMobile-min.png'}>
                    {content}
                </MobileImage>
                {/** content*/}
               
            </div>
        )
    }
}

export default Music;