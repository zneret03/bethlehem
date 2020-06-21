import React, {useState, useEffect} from 'react';
import {Menu} from 'react-feather';
import Sidebar from '../components/SiderComponent';
import {Link} from 'react-router-dom';
const HeaderComponent = ({children, name, redirect}) => {

    const [hamburger, setHamburger] = useState(false);
    const [show, setShow] = useState(false)
    const [sticky, setSticky] = useState(false)

    const sideBarOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }

    const sideBarClose = (e) =>{
        e.preventDefault();
        setShow(false);
    }

    const updateDimension = () =>{
        if(window.innerWidth < 500){
            setHamburger(true);
        }
        else{
            setHamburger(false);
            mountStickNavbar();
        }

    }

    const mountStickNavbar = () => {
        window.addEventListener('scroll', () => {
            const fixed = window.pageYOffset < 180;

            if(fixed !== true){
                    setSticky(true);
            }else{
                setSticky(false);
            }
        })
    }

    useEffect(() => {
        return window.removeEventListener('scroll', mountStickNavbar());
    },[sticky])

    useEffect(() => {
        window.addEventListener('resize', updateDimension);
        return () => {
            window.removeEventListener('resize', updateDimension);
        }
    })


        return(
            <>
            <div className="absolute top-0 left-0 z-20 p-5" key="logo">
                <a className="flex" href="https://bcif.netlify.com">
                    <img src={require('../image/Bcif.svg')} alt=""/>
                    <div className="border-l-2 mx-3 sm:block hidden"/>
                        <Link to={redirect}><span className="font-bold text-3xl uppercase font-sans sm:block hidden">{name}</span></Link>
                    </a>
            </div>
            <Sidebar open={show} close={(e) => sideBarClose(e)} key="sidebar">
            <div className="float-right  p-5">
                {hamburger ? (
                    <button className="border py-2 px-3 rounded font-bold bg-white" onClick={(e) => sideBarOpen(e)}><Menu size="20" color="#000"/></button>
                ) : (
                    <button className="border py-2 px-6 rounded font-bold bg-white text-black font-sans" onClick={(e) => sideBarOpen(e)}>MENU</button>
                )}
            </div>
            </Sidebar>
            {children}
            </>
        );
}

export default HeaderComponent;