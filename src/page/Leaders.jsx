import React from 'react';
import PageHeaderContent from '../utils/PageHeaderContent'
import FooterComponent from '../components/FooterComponent';
import {Facebook, Twitter, Instagram} from 'react-feather';
const Leaders = () => {

    const leadersInformation = [
        {
            id : 1,
            image : 'model1.jpg',
            name : 'Micheal Santos',
            email : 'Sample@yahoo.com',
            ministry : 'Music',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        },
        {
            id : 2,
            image : 'model2.jpg',
            name : 'Jazmin Arnold',
            email : 'Sample@yahoo.com',
            ministry : 'AWANA',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        },
        {
            id : 3,
            image : 'model3.jpg',
            name : 'Kaden Arnold',
            email : 'Sample@yahoo.com',
            ministry : 'Youth',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        },
        {
            id : 4,
            image : 'model4.jpg',
            name : 'Amelia Amanda',
            email : 'Sample@yahoo.com',
            ministry : 'any',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        },
        {
            id : 5,
            image : 'model5.jpg',
            name : 'Claudia kaneksi',
            email : 'Sample@yahoo.com',
            ministry : 'iHelp',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        },
        {
            id : 6,
            image : 'model6.jpg',
            name : 'Esme Broadway',
            email : 'Sample@yahoo.com',
            ministry : 'Pastor',
            facebook :  <Facebook className="" color="#322D2D"/>,
            twitter : <Twitter color="#322D2D"/>,
            instagram : <Instagram color="#322D2D"/>
        }
    ]

    return(
        <div className="font-serif">
            <PageHeaderContent 
                  Redirect={'/leaders'}
                  Title={'Leaders'}
                  Content={'Meet Our Leadership Team'}
                  image={'Leaders/Leaders.png'}
            />

            <div className="container mx-auto px-5 py-10 font-sans">
                    <div className="flex flex-wrap sm:flex-rows">
                    {leadersInformation.map((info) => (
                        <div className="lg:w-1/4 sm:w-1/2 p-2">
                            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                                <div className="mb-3">
                                    <div className="flex flex-row justify-between border-b py-2">
                                    <span className="uppercase font-bold text-blue-400">{info.ministry}</span>
                                    </div>
                                    <div className="py-5">
                                        <img className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500" 
                                        src={require(`../image/Leaders/${info.image}`)} alt=""/>
                                    </div>
                                    <h2 className="mt-3 text-2xl text-gray-700">{info.name}</h2>
                                    <span className="text-gray-500">{info.email}</span>
                                    </div>
                                    <ul className="flex justify-center">
                                    <li className="mr-5 rounded-full border hover:border-gray-900 cursor-pointer px-3 py-3 ">
                                        {info.facebook} 
                                    </li>
                                    <li className="mr-5 rounded-full border hover:border-gray-900 cursor-pointer px-3 py-3 ">
                                        {info.twitter}      
                                    </li>
                                    <li className="mr-5 rounded-full border hover:border-gray-900 cursor-pointer px-3 py-3 ">
                                        {info.instagram}    
                                    </li>
                                    </ul>
                            </div>
                        </div>
                        ))}
                    </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default Leaders;