import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sider';
class Navbar extends React.Component {
    
    button = () => {
        const button = [
        <Sidebar open={this.props.show} close={this.props.close}>
            <div className="float-right p-5">
                {this.props.hamburger ? (
                    <button className="border border-white py-2 rounded px-3 font-bold text-white" onClick={this.props.menu}><FontAwesomeIcon icon={faBars}/></button>
                ) : (
                    <button className="border border-white rounded py-2 px-6 font-bold text-white" onClick={this.props.menu}>MENU</button>
                )}
            </div>
        </Sidebar>
        ]

        return button;
    }

    nav = (sticky) => {
        return(
            <div className={`${sticky} shadow-lg w-screen z-50 sm:block sm:p-4 sm:text-lg bg-black`}>
                <div className="container mx-auto px-2">
                <div className="flex items-center">
                    <div className="py-2 sm:py-1 flex-1 sm:px-5 w-56">
                        <img src={require('../image/B.png')} alt=""/>
                    </div>
                    <ul className="xl:flex lg:flex md:flex font-segoe-UI text-white hidden sm:hidden md:block lg:block">
                        <li className="mr-5"><AnchorLink href='#church'>Church</AnchorLink></li>
                        <li className="mr-5"><AnchorLink href='#music'>Music</AnchorLink></li>
                        <li className="mr-5"><AnchorLink href='#ministries'>Ministries</AnchorLink></li>
                        <li className="mr-5"><AnchorLink href='#events'>Events</AnchorLink></li>
                        <li className="mr-6"><AnchorLink href='#leaders'>Leaders</AnchorLink></li>
                        <li><button className="font-bold text-white">Menu</button></li>
                    </ul>
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