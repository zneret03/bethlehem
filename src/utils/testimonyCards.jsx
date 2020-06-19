import React from 'react';
import Slider from 'react-slick';
import {ArrowRightCircle, ArrowLeftCircle} from 'react-feather';


const TestimonyCards = ({information}) => {

    const settings = {
        dots : true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad : true,    
        nextArrow : <ArrowRightCircle color="blue"/>,
        prevArrow : <ArrowLeftCircle color="blue"/>,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                slidesToShow : 2,
                slidesToScroll : 2,
                initialSlide : 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  centerPadding: "60px",
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
            }
        ]
      };
      
    return(
        <div className="container mx-auto py-5">
            <div className="px-8">
                <Slider {...settings}>
                    {information.map((info) => (
                        <div className="overflow-hidden max-w-xs border-t-4 border-blue-700 shadow-lg rounded transition 
                        duration-500 ease-in-out transform hover:translate-y-6 hover:scale-105" key={info.id}>
                            <div className="text-lg">
                                <div className="text-center font-bold text-black pt-5">
                                    <span>{info.date}</span>
                                </div>
                            </div>
                            
                            <div className="px-6 py-6 ">
                                <div className="text-sm font-segoe-UI leading-6">
                                <p className="mb-2">{info.content1}</p>
                                <p>{info.content2}</p>
                                <p>{info.content3}</p>
                                </div>
                            </div>
                        </div> 
                    ))}
            </Slider>
            </div>
        </div>
    );
}

export default TestimonyCards;