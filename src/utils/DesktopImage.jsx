import React from 'react';
const DekstopImage = ({children}) => {

    return(
        <div className="desktop-view hidden sm:block relative min-h-screen transition 
        duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            {children}
        </div>
    )
}

export default DekstopImage;