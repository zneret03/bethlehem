import React from 'react';

const MobileImage  = ({image, children}) => {
    return(
        <div className="mobile-view block sm:hidden w-screen h-screen bg-cover bg-no-repeat 
        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105" style={{backgroundImage : `url(${require(`../image/${image}`)})`}}>
           {children}
        </div>
    );
}

export default MobileImage;