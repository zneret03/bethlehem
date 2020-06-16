import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
class Navigation extends React.Component {
    render(){
        return(
            <>
            <div className="font-serif">
                <div className="text-center py-10 text-xl sm:text-3xl" style={{color : '#63605B'}}>
                    <p>We’re excited about God and the good things He’s doing in Earth</p>
                    <p>and love that we get to be part of it!</p>
                </div>
                <div className="border-t-2 border-gray-400 w-32 sm:w-48 mb-12 mx-auto"></div>
                <ul className="hidden sm:block sm:flex sm:justify-center sm:p-4 sm:text-2xl font-sans text-gray-500">
                    <li className="mr-20"><AnchorLink href="#">Church</AnchorLink></li>
                    <li className="mr-20"><AnchorLink href="#">Music</AnchorLink></li>
                    <li className="mr-20"><AnchorLink href="#">Ministries</AnchorLink></li>
                    <li><AnchorLink href="#">Events</AnchorLink></li>
                </ul>
            </div>
            </>
        )
    }
}

export default Navigation;