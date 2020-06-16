import React from 'react';
class Navigation extends React.Component {
    render(){
        return(
            <div className="bg-gray-100">
                <div className="font-serif pt-10">
                    <div className="border-t-2 border-gray-400 w-32 sm:w-32 mx-auto"></div>
                    <div className="text-center py-10 text-xl sm:text-3xl" style={{color : '#63605B'}}>
                        <p>“What's the will of God? On earth as it is in heaven.</p>
                        <p>If it exists there, it's supposed to exist here.”</p>
                    </div>
                </div>
                <h6 className="uppercase text-center font-bold text-sm text-green-500 pb-20">Bill Johnson</h6>
            </div>
        )
    }
}

export default Navigation;