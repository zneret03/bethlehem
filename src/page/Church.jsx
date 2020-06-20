import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
class Church extends React.Component {


    render(){
        return(
            <div className="font-serif">
                <div className="w-screen bg-cover bg-no-repeat bg-center " style={{backgroundImage : `url(${require('../image/churchImage.png')})`}}>
                <div className="flex justify-center flex-wrap items-center text-center w-screen py-20">
                        <div className="text-white p-20 ">
                            <HeaderComponent name={'church'}>
                            <div className="tracking-wider">
                                <p className="sm:text-5xl text-4xl">Personal Revival, Kingdom Impact</p>
                            </div>
                            </HeaderComponent>
                        </div>
                    </div>
                </div>
                <div className="text-center p-20">
                    <div className="pt-5 pb-5">
                        <p className="text-3xl" style={{color : '#63605B'}}>The light that shines farthest shines the brightest at home. </p>
                        <p className="block uppercase font-bold text-sm text-green-500 pt-10 font-sans">jim elliot</p>
                    </div>
                </div>
                <div className="p-20" style={{backgroundColor : '#405252'}}>
                    <div className="text-center text-2xl text-white leading-10">
                        <p>The Lord has given us a mandate to be a resource center to impact cities and nations. What we</p>
                        <p>experience in the culture of the local church and the local city, we want to export. We train, </p>
                        <p>empower, and release people to take kingdom culture to the world. </p>
                    </div>
                </div>
                <div className="flex justify-center pt-20" style={{backgroundColor : '#F4F4F2'}}>                                                                          
                    <div>
                        <h1 className="font-serif text-3xl text-center text-gray-700">A Local Church with a Global Mandate</h1>
                        <div className="max-w-3xl text-xl font-sans leading-wider text-gray-600 pt-10">
                            <p className="mt-5">Bethlehem mission is to create a vibrant family of hope filled believers who deeply 
                            experience the love and presence of God and partner with Jesus to express the joy 
                            and power of His kingdom in every area of life.
                            </p>

                            <p className="mt-5">We've learned that to have a global impact it starts with individual hearts. Though we 
                            worship together across multiple campuses and services, we are bound together by a single 
                            mandate: to bring Heaven to Earth. At the center of our gatherings is a pursuit of God's 
                            presence, where our hearts are transformed and launched into their destinies. </p>

                            <p className="mt-5">Whether you are new to the family or a long-time member, we cannot wait to connect with 
                            you, pursuing God's presence until the world changes. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Church;