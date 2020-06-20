import React from 'react';
import mockDataTestimony from '../utils/mockDataTestimony';
import TestimonyCards from '../utils/testimonyCards';
const Testimony = () => {

    return(
        <div className="container mx-auto p-6">
            <div className="text-4xl text-gray-700 text-center pt-10">
                <span>Testimonies</span>
                <TestimonyCards information={mockDataTestimony}/>
            </div>
        </div>
    );
}

export default Testimony;