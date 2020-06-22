import React from 'react';
import DesktopImage from '../utils/DesktopImage';
import MobileImage from '../utils/MoblieImage';
import Content from '../utils/Content';
import Paragraph from '../utils/Paragraph';
import Button from '../utils/Button';
class Church extends React.Component{   
    render(){

        const content = [
            <Content key="church">
                <div className="mt-1 sm:mt-20 text-white">
                    <Paragraph title={'CHURCH'} 
                    heading={'Personal Revival, Kingdom'}
                    secondHeading={'Impact'}
                    paragraph={'Bethlehem is a community of worshippers in Philippines.\
                    We exist to ignite individual hearts until Heaven meets Earth \
                    We gather to encounter Gods presence, where personal \
                    revival starts.'}
                    textMargin={'xl:mr-32'}/>
                </div>
                <div className="mt-12">
                    <Button redirect={'/church'} buttonName={'more about local church'}/>
                </div>
            </Content>
        ]
        return(
                <div id="church">
                    {/**Desktop image */} 
                    <DesktopImage image={'ChurchDesktop-min.png'}> 
                        {content}
                    </DesktopImage>
                    {/**Mobile image */}
                    <MobileImage image={'ChurchMobile-min.png'}>
                        {content}
                    </MobileImage>
                    {/** content*/}
                   
                </div>
        )
    }
}

export default Church;