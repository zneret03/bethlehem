import React from 'react';
import PageHeaderContent from '../utils/PageHeaderContent'
import FooterComponent from '../components/FooterComponent';
import mockData from '../utils/mockDataEvents';
import CardEvent from '../utils/CardEvent';
const Events = () => {
    return(
        <div className="font-serif">
            <PageHeaderContent 
                Redirect={'/events'}
                Title={'events'}
                Content={'Gather with us'}
                image={'Events/churchEvents.png'}
            />
            <div>
                
            </div>
            <div className="container mx-auto py-8 px-6 font-sans">
                <span className="sm:text-4xl text-3xl text-gray-700">Upcoming Events</span>
            </div>
            <CardEvent information={mockData}/> 
            <FooterComponent />
        </div>
    );
}

export default Events;