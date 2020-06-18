import React, {lazy, Suspense} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = lazy(() => import('../page/Home'));
const Navigation = lazy(() => import('./Navigation'));
const Church = lazy(() => import('./Church'));
const Music = lazy(() => import('./Music'));
const Ministries = lazy(() => import('./Ministries'));
const Events = lazy(() => import('./Events'));
const Quote = lazy(() => import('./Quote'));
const Leaders = lazy(() => import('./Leaders'));
const Information = lazy(() => import('./Information'));
const InformationCard = lazy(() => import('./InformationCard'));
const Service = lazy(() => import('./Service'));
const UpComingEvents = lazy(() => import('./UpComingEvents'));
const Testimony = lazy(() => import('./Testimony'));
const Footer = lazy(() => import('./Footer'));
class Root extends React.Component {
    render(){
        return(
            <ParallaxProvider>
            <>
            <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
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
                <Service />
                <Testimony/>
                <UpComingEvents/>
                <Footer />
            </Suspense>
            </>
            </ParallaxProvider>
        )
    }
}

export default Root;