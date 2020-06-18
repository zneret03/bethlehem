import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
class Leaders extends React.Component{
    render(){
        const content = [
            <Content>
                <div className="mt-20 text-white animated bounce">
                    <Paragraph title={'LEADERS'} color={'#242020'} 
                    heading={'Meet Our Leadership Team'}
                    paragraph={"Our leadership team has a beautiful history together spanning many years. \
                    Our team is diverse and we've created a culture that believes \
                    we're all empowered leaders. "}
                    textMargin={'xl:mr-20'}/>
                </div>
                <div className="mt-12">
                    <Button buttonName={'GET TO KNOW THEM'}/>
                </div>
            </Content>
        ]

        return(
            <div id="leaders">
                {/**Desktop image */}
                <DesktopImage image={'LeadersDesktop-min.png'}>
                    {content}
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage image={'LeadersMobile-min.png'}>
                   {content}
                </MobileImage>
              
            </div>
        )
    }
}

export default Leaders;