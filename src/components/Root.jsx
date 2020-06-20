import React, {lazy, Suspense} from 'react';
//Components
const Home = lazy(() => import('../page/Home'));
const NavigationComponent = lazy(() => import('./NavigationComponent'));
const ChurchComponent = lazy(() => import('./ChurchComponent'));
const MusicComponent = lazy(() => import('./MusicComponent'));
const MinistriesComponent = lazy(() => import('./MinistriesComponent'));
const EventsComponent = lazy(() => import('./EventsComponent'));
const QuoteComponent = lazy(() => import('./QuoteComponent'));
const LeadersComponent = lazy(() => import('./LeadersComponent'));
const InformationComponent = lazy(() => import('./InformationComponent'));
const InformationCardComponent = lazy(() => import('./InformationCardComponent'));
const ServiceComponent = lazy(() => import('./ServiceComponent'));
const UpComingEventsComponent = lazy(() => import('./UpComingEventsComponent'));
const TestimonyComponent = lazy(() => import('./TestimonyComponent'));
const FooterComponent = lazy(() => import('./FooterComponent'));
class Root extends React.Component {
    render(){
        return(
                <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
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
                </Suspense>
        )
    }
}

export default Root;