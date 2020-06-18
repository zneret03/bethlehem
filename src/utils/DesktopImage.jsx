import React from 'react';
const DekstopImage = ({image, children}) => {

    return(
        <div className="hidden sm:block bg-no-repeat bg-cover w-screen h-screen transition 
        duration-500 ease-in-out transform hover:translate-y-3 hover:scale-105" style={{backgroundImage : `url(${require(`../image/${image}`)})`}}>
            {children}
        </div>
    )
}

export default DekstopImage;