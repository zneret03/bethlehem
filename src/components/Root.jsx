import React from 'react';
import Home from '../page/Home';
import Navigation from './Navigation';
import Church from './Church';
import Music from './Music';
import Ministries from './Ministries';
import Events from './Events';
import Quote from './Quote';
import Leaders from './Leaders';
import Information from './Information';
import InformationCard from './InformationCard';
import { ParallaxProvider } from 'react-scroll-parallax';

class Root extends React.Component {
    render(){
        return(
            <ParallaxProvider>
            <>
                <Home />
                <Navigation />
                <Church/>
                <Music />
                <Ministries />
                <Events />
                <Quote />
                <Leaders />
                <Information />
                <InformationCard />
            </>
            </ParallaxProvider>
        )
    }
}

export default Root;