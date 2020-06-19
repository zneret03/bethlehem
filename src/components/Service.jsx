import React from 'react';
class Church extends React.Component{   
    render(){
        return(
                <div>
                    <div className="bg-no-repeat bg-center" style={{backgroundImage : `url(${require('../image/ServiceDesktop-min.png')})`}}>
                    <div className="flex justify-center flex-wrap items-center text-center w-screen py-20">
                        <div className="text-white font-bold p-10">
                            <h1 className="uppercase text-6xl">service time</h1>
                            <h6 className="font-segoe-UI">SUN | 9:00 AM</h6>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Church;