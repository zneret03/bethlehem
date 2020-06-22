import React from 'react';
class Church extends React.Component{   
    render(){
        return(
                <div>
                    <div className="bg-no-repeat bg-center" style={{backgroundImage : `url(${require('../image/ServiceDesktop-min.png')})`}}>
                    <div className="flex justify-center flex-wrap items-center text-center w-screen font-sans">
                        <div className="text-white font-bold py-20">
                            <h1 className="uppercase text-6xl">service time</h1>
                            <h6 className="font-segoe-UI">SUN | 9:00 AM</h6>
                            <div className="pt-10">
                                <a className="rounded-sm hover:bg-white hover:text-green-500 border px-6 py-3 text-sm text-white uppercase" 
                                href="https://www.google.com/maps/dir//Bethlehem++location+Santa+Barbara+Iloilo/
                                @10.8233368,122.5319645,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aefd3482b760e1:
                                0x8ed2abbb02dd2ca1!2m2!1d122.5367684!2d10.8242602'} buttonName={'church location"
                                >church location</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Church;