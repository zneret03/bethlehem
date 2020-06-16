import React from 'react';

const Content = ({children}) =>{
    return(
        <div className="container mx-auto p-2 px-6 sm:p-4 absolute top-0 sm:right-0 md:w-1/2">
            {children}
        </div>
    );
}

export default Content;