import React from 'react';
class Information extends React.Component {
    render(){
        return(
            <>
                <div className="font-serif pt-10">
                    <div className="border-t-2 border-gray-400 w-32 sm:w-32 mx-auto"></div>
                    <div className="text-center pt-10 pb-4 text-xl sm:text-4xl" style={{color : '#63605B'}}>
                        <p>What’s happening here in the Philippines</p>
                    </div>
                </div>
                <div className="max-w-xl mx-auto text-center text-lg leading-7 pb-10" style={{color: '#63605B'}}>
                    <p>Our church family extends beyond of our four walls of a building. 
                        We have the incredible privilege of serving our nation</p>
                </div>
            </>
        )
    }
}

export default Information;