import React from 'react';

const MobileImage  = ({children}) => {
    return(
        <div className="mobile-view block sm:hidden min-h-screen transition 
        duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
           {children}
        </div>
    );
}

export default MobileImage;