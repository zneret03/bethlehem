import React from 'react';
import {Menu} from 'react-feather';
import Sidebar from '../components/Sider';
import Navbar from '../components/Navbar'
class Home extends React.Component {

    constructor(){
        super();
            this.state = {
                hamburger : false,
                show : false,
                sticky : false
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
            this.mountStickNavbar();
        }
    }

    mountStickNavbar() {
        window.addEventListener('scroll', () => {
            const fixed = window.pageYOffset < 180;

            if(fixed !== true){
                this.setState({
                    sticky : true
                });
                
            }else{
                this.setState({
                    sticky : false
                })
            }
        })
    }

    unMountStickyNavbar = () =>{
        window.removeEventListener('scroll', this.mountStickNavbar.bind(this));
    }

    mountHamburger = () =>{
        this.updateDimension();
        window.addEventListener('resize', this.updateDimension.bind(this));
    }

    unMountHamburger = () =>{
        this.updateDimension();
        window.removeEventListener('resize', this.updateDimension.bind(this));
    }

    componentDidMount(){
        this.mountHamburger();
    }

    componentWillUnmount(){         
        this.unMountHamburger(); 
        this.unMountStickyNavbar();    
    }

    render(){

        const backGroundWord = [
            <div className="mx-auto w-11/12 py-40 sm:py-20 md:py-5 sm:w-10/12 md:w-8/12 xl:w-6/12 lg:w-6/12 xl:py-0" key="word">
                <img className="text-center object-cover w-screen" src={require('../image/desktopViewWords-min.png')} alt=""/>
            </div>
        ]

        const button = [
        <Sidebar open={this.state.show} close={(e) => this.sideBarClose(e)} key="sidebar">
            <div className="float-right p-5">
                {this.state.hamburger ? (
                    <button className="border py-2 px-3 rounded font-bold bg-white" onClick={(e) => this.sideBarOpen(e)}><Menu size="20"/></button>
                ) : (
                    <button className="border py-2 px-6 rounded font-bold bg-white" onClick={(e) => this.sideBarOpen(e)}>MENU</button>
                )}
            </div>
        </Sidebar>
        ]

        const logo = [
            <div className="absolute top-0 left-0 z-20 p-5 w-screen h-screen container mx-auto px-5" key="logo">
                <a href="https://bcif.netlify.com"><img src={require('../image/Bcif.svg')} alt=""/></a>
            </div>
        ]
    
        return(
            <>           
                {this.state.sticky && <Navbar
                show={this.state.show}
                open={(e) => this.sideBarOpen(e)}
                close={(e) => this.sideBarClose(e)}
                hamburger={this.state.hamburger}
                sticky={this.state.sticky} 
                />
                
                }
                <div className="hidden sm:block w-screen h-screen bg-no-repeat bg-cover" style={{backgroundImage : `url(${require('../image/desktopViewHome-min.png')})`}}>
                    {logo}
                    {backGroundWord}
                    {button}
                </div>
                <div className="block sm:hidden w-screen h-screen bg-no-repeat bg-cover"style={{backgroundImage : `url(${require('../image/mobileViewHome-min.png')})`}}>
                    {logo}
                    {backGroundWord}
                    {button}
                </div>
            </>
        );
    }
    
}

export default Home;