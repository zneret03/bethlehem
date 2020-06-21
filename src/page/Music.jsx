import React from 'react';
import PageContent from '../utils/PageContent';
const Music = () => {

    const musicCardData = [
        {
            id : 'Cnct',
            image : 'Music/thanksgiving.jpg',
            title : 'Thanksgiving',
            header : 'Thanks Giving',
            paragraph1 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            paragraph2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ' ,
        },
        {
            id : 'gw',
            image : 'Music/Worship.jpg',
            title : 'praise',
            header : 'Praising Him ',
            paragraph1 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            paragraph2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ' ,
        },
        {
            id : 'srve',
            image : 'Music/Offering.jpg',
            title : 'Offering',
            header : 'Giving',
            paragraph1 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ',
            paragraph2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ' ,
        }
    ]

    const musicCardLong = [
        {
            id : 'WE',
            image : 'Worship.jpg',
            title : 'Worship Expression',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id : 'BW',
            image : 'Singing.jpg',
            title : 'Bethlehem Music',
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]


    return(
       <PageContent 
        contentCard={musicCardData}
        headerTitle={"worship"}
        headerContent={"It's all about His presence"}
        headerRedirect={"/music"}
        contentTitle={'Worship is what we were created for. '}
        paragraph1={"Why does the Lord invite us into a place of worship? The Lord, in ​H​is mercy, designed it for us to find our fullest expression in life standing before ​H​im accepted, delighted in, and ministering unto Him in thanksgiving and praise. God always chooses the best. If God, in loving us, chooses to design us as worshippers, then what's the point? You always become like what you worship. There’s nothing ​H​e could want more for us than for us to become like Him. With that in mind, He designed us to be worshippers."}
        paragraph2={"In our history at Bethel, there was a line drawn in the sand where we said, 'This is why we’re alive, this is our supreme responsibility, our great God-given opportunity to be those who minister to the Lord.' As a church, our entire ministry grew out of that priority. Most everything we've ever learned, we've learned as worshippers. "}
        quote={"It's more than a song we sing. It’s our heartfelt response we give to God that places value on Him. "}
        quoteAuthor={'Bill Johnson'}
        image={'Music/music-min.png'}
       >
        <div>
            {musicCardLong.map((info) => (
                <div className="container-lg mx-auto py-1 bg-gray-200 pt-6">
                    <div className="lg:py-12 lg:flex lg:justify-center">
                        <div className="bg-white mx-8 lg:flex lg:max-w-5xl shadow rounded-lg">
                            <div className="lg:w-1/2">
                                <div className="h-64 bg-cover bg-center lg:rounded-l lg:h-full" style={{backgroundImage : `url(${require(`../image/Music/${info.image}`)})`}}></div>
                            </div>
                            <div className="py-12 px-12 max-w-lg max-w-full lg:w-1/2 font-sans">
                                <h2 className="sm:text-3xl text-2xl text-gray-800 font-bold">{info.title}</h2>
                                <p className="mt-4 text-gray-600 leading-1 sm:text-lg text-md">{info.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </PageContent>
    )
}

export default Music;