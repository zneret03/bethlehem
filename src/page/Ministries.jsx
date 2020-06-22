import React from 'react';
import Card from '../utils/Card';
import PageHeaderContent from '../utils/PageHeaderContent';
import FooterComponent from '../components/FooterComponent';
const Ministries = () => {
    const information = [
        {
            id : 1,
            image : 'community-min.jpg',
            title : 'Helping Community',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#community',
            hashtag2 : '#iHelp',
            redirect : '/community'
        },
        {
            id : 2,
            image : 'creativeness-min.jpg',
            title : 'Creativeness',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#happiness',
            hashtag2 : '#praise',
            redirect : '/creativeness'
        },
        {
            id : 3,
            image : 'school-min.jpg',
            title : 'School Community',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#Knowledge',
            hashtag2 : '#team',
            redirect : '/school'
        },
        {
            id : 4,
            image : 'Outreach-min.jpg',
            title : 'Outreach Program',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#community',
            hashtag2 : '#iHelp',
            redirect : '/outreach'
        },
        {
            id : 5,
            image : 'community-min.jpg',
            title : 'Helping Community',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#community',
            hashtag2 : '#iHelp',
            redirect : '/community'
        },
        {
            id : 6,
            image : 'creativeness-min.jpg',
            title : 'Creativeness',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#happiness',
            hashtag2 : '#praise',
            redirect : '/creativeness'
        },
        {
            id : 7,
            image : 'school-min.jpg',
            title : 'School Community',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#Knowledge',
            hashtag2 : '#team',
            redirect : '/school'
        },
        {
            id : 8,
            image : 'Outreach-min.jpg',
            title : 'Outreach Program',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            hashtag1 : '#community',
            hashtag2 : '#iHelp',
            redirect : '/outreach'
        }
    ]
    return(
        <div className="font-serif">
                <PageHeaderContent 
                    Redirect={'/ministries'}
                    Title={'ministries'}
                    Content={'Our Ministries & Friends'}
                    image={'Ministries/Ministries.png'}
                />
                <Card information={information}/>
                <FooterComponent /> 
        </div>
    )   
}

export default Ministries;