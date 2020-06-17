import React from 'react';
const Paragraph = ({title, heading, secondHeading, paragraph, color, textMargin}) =>{
    return(
        <>
            <div className="leading-tight md:text-3xl">
                <p className="font-bold text-sm mb-3" style={{color : color}}>{title}</p>
                <p className="font-serif text-4xl">{heading}</p>
                <p className="font-serif text-4xl">{secondHeading}</p>
            </div>
            <div className="leading-widest text-lg md:text-xl">
                <p className={`mt-10 leading-9 sm:mr-32 md:mr-1 ${textMargin}`}>
                {paragraph}
                </p>
            </div>
        </>
    );
}

export default Paragraph;