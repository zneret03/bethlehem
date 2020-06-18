import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends React.Component {

    nav = (sticky) => {
        return(
            <div className={`${sticky} shadow-lg w-screen z-50 sm:block sm:p-4 sm:text-lg bg-black`}>
                <div className="container mx-auto px-5">
                <div className="sm:flex sm:items-center">
                    <div className="flex-1 px-5 w-48">
                        <img src={require('../image/Bcif.svg')} alt=""/>
                    </div>
                    <ul className="flex font-segoe-UI text-white">
                        <li className="mr-5"><AnchorLink href="#">Church</AnchorLink></li>
                        <li className="mr-5"><AnchorLink href="#">Music</AnchorLink></li>
                        <li className="mr-5"><AnchorLink href="#">Ministries</AnchorLink></li>
                        <li><AnchorLink href="#">Events</AnchorLink></li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }

    render(){

        return(
            <>
                {this.props.sticky ? this.nav('sticky top-0') : this.nav()}
            </>
        )
    }
}

export default Navbar;