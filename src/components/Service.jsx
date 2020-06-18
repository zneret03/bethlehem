import React from 'react';
class Church extends React.Component{   
    render(){
        return(
                <div className="relative">
                    {/**Desktop image */} 
                    <div className="sm:object-cover md:object-cover lg:object-cover xl:object-cover 
                        xl:w-screen xl:h-auto md:h-screen md:w-screen lg:h-screen lg:w-screen sm:h-screen sm:w-screen"> 
                        <img src={require('../image/ServiceDesktop-min.png')} alt=""/>
                    </div>
                    {/**Mobile image */}
                    <div className="object-contain h-screen w-screen xl:hidden">
                        <img src={require('../image/ServiceMobile-min.png')} alt=""/>
                    </div>
                    <div className="flex justify-center flex-wrap items-center text-center">
                        <div className="text-white absolute top-0 font-bold mt-40 xl:mt-20">
                            <h1 className="uppercase text-6xl">service time</h1>
                            <h6 className="font-segoe-UI">SUN | 9:00 AM</h6>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Church;