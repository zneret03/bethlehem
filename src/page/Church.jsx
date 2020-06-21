import React from 'react';
import PageContent from '../utils/PageContent';
const Church = () => {

    const churchCardhData = [
        {
            id : 'Cnct',
            image : 'Church/connect-min.jpg',
            title : 'Connect',
            header : 'Connection',
            paragraph1 : 'We encourage our local church family to connect outside of weekend services by joining Life Groups, special interest groups, and attending events and gatherings. ',
            paragraph2 : '' ,
        },
        {
            id : 'gw',
            image : 'Church/grow-min.jpg',
            title : 'Grow',
            header : 'Growing',
            paragraph1 : 'We offer a variety of weekly classes to equip our local church family in practical training as a believer. Classes range from training in the prophetic to learning about the Bible. ',
            paragraph2 : '' ,
        },
        {
            id : 'srve',
            image : 'Church/serve-min.jpg',
            title : 'Serve',
            header : 'Serving',
            paragraph1 : 'We provide opportunities for our local church family to serve our city and the world through a wide range of ministries and missions. ',
            paragraph2 : '' ,
        }
    ]

    return(
        <>
            <PageContent
                headerTitle={'church'}
                headerRedirect={'/church'} 
                headerContent={'Personal Revival, Kingdom Impact'}
                contentCard={churchCardhData}
                contentTitle={'A Local Church with a Global Mandate'}
                quote={'The light that shines farthest shines the brightest at home.'}
                quoteAuthor={'jim elliot'}
                paragraph1={'Bethlehem mission is to create a vibrant family of hope filled believers who deeply experience the love and presence of God and partner with Jesus to express the joy and power of His kingdom in every area of life.'}
                paragraph2={"We've learned that to have a global impact it starts with individual hearts. Though we worship together across multiple campuses and services, we are bound together by a single mandate: to bring Heaven to Earth. At the center of our gatherings is a pursuit of God's presence, where our hearts are transformed and launched into their destinies. "}
                paragraph3={"Whether you are new to the family or a long-time member, we cannot wait to connect with you, pursuing God's presence until the world changes."}
                image={'Church/churchImage.png'}>
                <div className="sm:p-20 p-10" style={{backgroundColor : '#405252'}}>
                    <div className="text-center lg:text-2xl text-lg text-white leading-10">
                        <p>The Lord has given us a mandate to be a resource center to impact cities and nations. What we</p>
                        <p>experience in the culture of the local church and the local city, we want to export. We train, </p>
                        <p>empower, and release people to take kingdom culture to the world. </p>
                    </div>
                </div>
            </PageContent>
        </>
    );
}

export default Church;