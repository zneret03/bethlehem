import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sider';
class Home extends React.Component {

    constructor(){
        super();
            this.state = {
                hamburger : false,
                show : false,
            }

            this.sideBarOpen = this.sideBarOpen.bind(this);
    }

    sideBarOpen(e){
        e.preventDefault();
        this.setState({
            show : !this.state.show
        });
    }

    sideBarClose(e){
        e.preventDefault();
        this.setState({
            show : false
        })
    }

    updateDimension(){
        if(window.innerWidth < 500){
            this.setState({
                hamburger : true
            })
        }
        else{
            this.setState({
                hamburger : false
            })
        }
    }

    componentDidMount(){
        this.updateDimension();
        window.addEventListener('resize', this.updateDimension.bind(this));
    }

    componentWillUnmount(){
        this.updateDimension();
        window.removeEventListener('resize', this.updateDimension.bind(this));
    }

    render(){
        return(
            <>                  
                <div className="desktop-view hidden sm:block relative">
                    <img className="sm:object-cover sm:h-screen sm:w-screen" src={require('../image/desktopViewHome-min.png')} alt=""/>
                </div>
                <div className="mobile-view block sm:hidden">
                    <img className="object-cover h-screen w-screen xl:hidden" src={require('../image/mobileViewHome-min.png')} alt=""/>
                </div>
                <div className="absolute top-0 right-0 left-0 bottom-0 mx-auto w-11/12 py-40 sm:py-20 md:py-5 sm:w-10/12 md:w-8/12 xl:w-6/12 lg:w-6/12 xl:py-0">
                    <img className="text-center" src={require('../image/desktopViewWords-min.png')} alt=""/>
                </div>
                <div className="absolute top-0 left-0 p-5 w-32">
                    <img src={require('../image/Bcif.svg')} alt=""/>
                </div>
                <Sidebar open={this.state.show} close={(e) => this.sideBarClose(e)}>
                    <div className="absolute top-0 right-0 p-5">
                        {this.state.hamburger ? (
                            <button className="border py-2 px-3 rounded font-bold bg-white" onClick={(e) => this.sideBarOpen(e)}><FontAwesomeIcon icon={faBars}/></button>
                        ) : (
                            <button className="border py-2 px-6 rounded font-bold bg-white" onClick={(e) => this.sideBarOpen(e)}>MENU</button>
                        )}
                    </div>
                </Sidebar>
            </>
        );
    }
    
}

export default Home;