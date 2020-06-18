import React from 'react';

const MobileImage  = ({image, children}) => {
    return(
        <div className="mobile-view block sm:hidden min-h-screen transition bg-cover bg-no-repeat 
        duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105" style={{backgroundImage : `url(${require(`../image/${image}`)})`}}>
           {children}
        </div>
    );
}

export default MobileImage;