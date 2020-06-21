import React from 'react';
//Components
import Home from '../page/Home';
import NavigationComponent from './NavigationComponent';
import ChurchComponent from './ChurchComponent';
import MusicComponent from './MusicComponent';
import MinistriesComponent from './MinistriesComponent';
import EventsComponent from './EventsComponent';
import QuoteComponent from './QuoteComponent';
import LeadersComponent from './QuoteComponent';
import InformationComponent from './QuoteComponent';
import InformationCardComponent from './QuoteComponent';
import ServiceComponent from './QuoteComponent';
import UpComingEventsComponent from './QuoteComponent';
import TestimonyComponent from './QuoteComponent';
import FooterComponent from './QuoteComponent';
// const Home = lazy(() => import('../page/Home'));
// const NavigationComponent = lazy(() => import('./NavigationComponent'));
// const ChurchComponent = lazy(() => import('./ChurchComponent'));
// const MusicComponent = lazy(() => import('./MusicComponent'));
// const MinistriesComponent = lazy(() => import('./MinistriesComponent'));
// const EventsComponent = lazy(() => import('./EventsComponent'));
// const QuoteComponent = lazy(() => import('./QuoteComponent'));
// const LeadersComponent = lazy(() => import('./LeadersComponent'));
// const InformationComponent = lazy(() => import('./InformationComponent'));
// const InformationCardComponent = lazy(() => import('./InformationCardComponent'));
// const ServiceComponent = lazy(() => import('./ServiceComponent'));
// const UpComingEventsComponent = lazy(() => import('./UpComingEventsComponent'));
// const TestimonyComponent = lazy(() => import('./TestimonyComponent'));
// const FooterComponent = lazy(() => import('./FooterComponent'));
class Root extends React.Component {
    render(){
        return(
               <>
                    <Home />
                    <NavigationComponent />
                    <ChurchComponent/>
                    <MusicComponent />
                    <MinistriesComponent />
                    <EventsComponent />
                    <QuoteComponent />
                    <LeadersComponent />
                    <InformationComponent />
                    <InformationCardComponent />
                    <ServiceComponent />
                    <TestimonyComponent/>
                    <UpComingEventsComponent/>
                    <FooterComponent />
                </>
        )
    }
}

export default Root;