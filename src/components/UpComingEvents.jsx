import React from 'react';
import CardEvent from '../utils/CardEvent';
import mockData from '../utils/mockDataEvents';
const InformationCard = () => {
    
        return(
            <>
                <div className="container mx-auto py-8 text-center">
                    <span className="text-4xl text-gray-700">Upcoming Events</span>
                </div>
                <CardEvent information={mockData}/> 
            </>
        )
}

export default InformationCard;