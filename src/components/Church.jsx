import React from 'react';

class Church extends React.Component{
    render(){
        return(
            <div className="relative">
                <div className="desktop-view hidden sm:block relative min-h-screen">
                    <img className="sm:object-cover sm:h-screen sm:w-screen" src={require('../image/ChurchDesktop.png')} alt=""/>
                </div>
                <div className="mobile-view block sm:hidden min-h-screen">
                    <img className="object-cover h-screen w-screen xl:hidden" src={require('../image/ChurchMobile.png')} alt=""/>
                </div>
                <div className="container mx-auto p-2 px-6 sm:p-4 absolute top-0 sm:right-0 md:w-1/2">
                    <div className="mt-20 text-white">
                        <div className="leading-tight text-2xl md:text-3xl">
                            <p className="font-bold text-sm mb-3">CHURCH</p>
                            <p className="font-serif ">Personal Revival, Kingdom</p>
                            <p className="font-serif md:text-4xl">Impact</p>
                        </div>
                        <div className="leading-widest text-lg md:text-xl ">
                            <p className="mt-10 leading-9 sm:mr-32 md:mr-1 xl:mr-32">
                            Bethlehem is a community of worshippers in Philippines. 
                            We exist to ignite individual hearts until Heaven meets Earth
                            We gather to encounter God's presence, where personal
                            revival starts.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button className="rounded-sm hover:bg-white hover:text-green-500 
                        border w-full sm:w-1/2 md:w-64 lg:w-1/2 xl:w-1/2 
                         py-3 text-sm sm:text-sm md:text-xs lg:text-xs xl:text-sm text-white uppercase">
                            more about local church
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Church;