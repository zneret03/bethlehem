import React from 'react';

const MobileImage  = ({children}) => {
    return(
        <div className="mobile-view block sm:hidden min-h-screen">
           {children}
        </div>
    );
}

export default MobileImage;