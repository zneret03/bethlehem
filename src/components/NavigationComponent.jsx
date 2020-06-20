import React from 'react';
class Navigation extends React.Component {
    render(){
        return(
            <div className="font-serif py-5">
                <div className="text-center py-10 text-xl sm:text-3xl" style={{color : '#63605B'}}>
                    <p>We’re excited about God and the good things He’s doing in Earth</p>
                    <p>and love that we get to be part of it!</p>
                </div>
                <div className="border-t-2 border-gray-400 w-32 sm:w-48 mb-12 mx-auto"></div>
            </div>
        )
    }
}

export default Navigation;