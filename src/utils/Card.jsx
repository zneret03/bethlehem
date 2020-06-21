import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({information}) =>  {

        return(
            <div className="container mx-auto p-6 grid grid-rows gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            flex justify-center pt-10 pb-20">  
                {information.map((info) => (
                    <Link to={info.redirect} key={info.id}>
                        <div className="mx-auto rounded overflow-hidden shadow-lg transition 
                        duration-500 ease-in-out transform hover:translate-y-6 hover:scale-105 cursor-pointer">
                        <img className="w-full" src={require(`../image/${info.image}`)} alt=""/>
                            <div className="px-6 pt-4">
                                <div className="font-bold text-xl mb-2 text-gray-700">{info.title}</div>
                                <p className="text-gray-700 text-base">
                                {info.paragraph}
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{info.hashtag1}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{info.hashtag2}</span>
                            </div>
                        </div>
                    </Link>
                    )
                )}
            </div>
        )
}

export default Card;