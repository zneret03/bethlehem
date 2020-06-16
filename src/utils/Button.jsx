import React from 'react';
import {Link} from 'react-router-dom';
const Button = ({buttonName, className}) =>{
    return(
        <>
            <Link className={`rounded-sm hover:bg-white hover:text-green-500 
                    border px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6
                    py-3 text-sm sm:text-sm md:text-xs lg:text-xs xl:text-sm text-white uppercase ${className}`}>
                    {buttonName}
            </Link>
        </>
    );
}

export default Button;