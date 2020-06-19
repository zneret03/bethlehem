import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Menu} from 'react-feather';
class Navbar extends React.Component {
    
    constructor(){
        super();

        this.state = {
            showNavbar : false
        }

        this.navbarOpen = this.navbarOpen.bind(this);
    }

    navbarOpen = (e) => {
        e.preventDefault();
        if(this.state.showNavbar !== true){
            this.setState({
                showNavbar : true
            })
        }
        
        if(this.state.showNavbar === true){
            this.setState({
                showNavbar : false
            })
        }
    }

    nav = (sticky) => {
        return(
            <div className={`${sticky} shadow-lg w-screen z-50 sm:block sm:p-4 sm:text-lg bg-black`}>
                <div className="container mx-auto px-2 sm:flex sm:justify-between sm:items-center">
                <div className="flex justify-between items-center">
                    <div className="py-4 px-3 sm:py-1 sm:px-5 w-56">
                        <img src={require('../image/B.png')} alt=""/>
                    </div>
                    <div className="block sm:hidden block py-2 px-3">
                        <button className="border py-2 px-3 rounded font-bold text-white" onClick={(e) => this.navbarOpen(e)}><Menu size="20"/></button>
                    </div>
                </div>
                <div className={`${this.state.showNavbar ? 'block' : 'hidden'} font-segoe-UI text-white sm:flex px-2 pb-2 sm:p-0`}>
                        <span className="sm:mr-3 mt-1 px-2 py-1 sm:mt-0 block rounded hover:text-gray-500"><AnchorLink href='#church'>Church</AnchorLink></span>
                        <span className="sm:mr-3 mt-1 px-2 py-1 sm:mt-0 block rounded hover:text-gray-500"><AnchorLink href='#music'>Music</AnchorLink></span>
                        <span className="sm:mr-3 mt-1 px-2 py-1 sm:mt-0 block rounded hover:text-gray-500"><AnchorLink href='#ministries'>Ministries</AnchorLink></span>
                        <span className="sm:mr-3 mt-1 px-2 py-1 sm:mt-0 block rounded hover:text-gray-500"><AnchorLink href='#events'>Events</AnchorLink></span>
                    </div>
                </div>
            </div>
        )
    }

    render(){

        return(
            <>
                {this.props.sticky ? this.nav('sticky top-0') : null}
            </>
        )
    }
}

export default Navbar;