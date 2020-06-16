import React from 'react';
import {Link} from 'react-router-dom';
const Card = ({information}) =>  {
    
        return(
            <div className="grid grid-rows gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex justify-center container mx-auto p-6 pt-10">
                {information.map((info, index) => (
                    <Link to={info.redirect}>
                        <div className="max-w-xs rounded overflow-hidden shadow-lg transition 
                        duration-500 ease-in-out transform hover:translate-y-6 hover:scale-105 cursor-pointer" 
                        key={index}>
                        <img className="w-full" src={require(`../image/${info.image}`)}/>
                            <div className="px-6 pt-4">
                                <div class="font-bold text-xl mb-2 text-gray-700">{info.title}</div>
                                <p className="text-gray-700 text-base">
                                {info.paragraph}
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{info.hashtag1}</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{info.hashtag2}</span>
                            </div>
                        </div>
                    </Link>
                    )
                )}
            </div>
        )
}

export default Card;