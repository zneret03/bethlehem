import React from 'react';
//Components
import Home from '../page/Home';
import NavigationComponent from './NavigationComponent';
import ChurchComponent from './ChurchComponent';
import MusicComponent from './MusicComponent';
import MinistriesComponent from './MinistriesComponent';
import EventsComponent from './EventsComponent';
import QuoteComponent from './QuoteComponent';
import LeadersComponent from './LeadersComponent';
import InformationComponent from './InformationComponent';
import InformationCardComponent from './InformationCardComponent';
import ServiceComponent from './ServiceComponent';
import UpComingEventsComponent from './UpComingEventsComponent';
import TestimonyComponent from './TestimonyComponent';
import FooterComponent from './FooterComponent';
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