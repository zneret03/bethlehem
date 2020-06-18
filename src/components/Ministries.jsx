import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
class Ministries extends React.Component{
    render(){
        
        const content = [
            <Content key="Ministries">
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
                    <Button redirect={'/ministries'} buttonName={'MORE ABOUT MINISTRIES'}/>
                </div>
            </Content>
        ]

        return(
            <div id="ministries">
                {/**Desktop image */}
                <DesktopImage image={'MinistriesDesktop-min.png'}>
                {content}
                </DesktopImage>
                {/**Mobile image */}
                <MobileImage image={'MinistriesMobile-min.png'}>
                    {content}
                </MobileImage>
                {/** content*/}
               
            </div>
        )
    }
}

export default Ministries;