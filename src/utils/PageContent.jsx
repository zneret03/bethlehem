import React from 'react';
import PageHeaderContent from '../utils/PageHeaderContent';
import ServiceComponent from '../components/ServiceComponent';
import FooterComponent from '../components/FooterComponent';
const PageContent = ({headerTitle, headerContent, headerRedirect, contentTitle, contentCard, quote, quoteAuthor, paragraph1, paragraph2, paragraph3, image, children}) => {
        
        return(
            <div className="font-serif">
                <PageHeaderContent 
                    Redirect={headerRedirect}
                    Title={headerTitle}
                    Content={headerContent}
                    image={image}
                />
                <div className="text-center sm:p-20 p-10">
                    <div className="pt-3 pb-3 mx-auto max-w-3xl">
                        <p className="sm:text-3xl text-xl" style={{color : '#63605B'}}>“{quote}”</p>
                        <p className="block uppercase font-bold text-sm  text-green-500 pt-10 font-sans">{quoteAuthor}</p>
                    </div>
                </div>
                {children}
                <div className="flex justify-center py-20" style={{backgroundColor : '#F4F4F2'}}>                                                                          
                    <div>
                        <h1 className="font-serif sm:text-3xl text-3xl text-center text-gray-700">{contentTitle}</h1>
                        <div className="container max-w-4xl px-10 sm:text-xl text-xl font-sans leading-10 sm:py-5 py-5" style={{color : '#877B7B'}}>
                            <p className="mt-6">{paragraph1}</p>
                            <p className="mt-6">{paragraph2}</p>
                            <p className="mt-6">{paragraph3}</p>
                        </div>
                    </div>
                </div>

                <ServiceComponent />
                <div className="container-lg mx-auto py-12 font-sans">
                    <div className="flex justify-center flex-wrap">
                    {contentCard.map((info) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg transition 
                            duration-500 ease-in-out transform hover:translate-y-10 hover:scale-105 cursor-pointer mr-5 mb-5" key={info.id}> 
                            <img className="w-full" src={require(`../image/${info.image}`)} alt=""/>
                            <div className="flex items-center px-3 py-3 bg-gray-900">
                                <h1 className="mx-3 text-white font-semibold text-lg uppercase tracking-widest">{info.title}</h1>
                            </div>
                            <div className="px-6 pt-4">
                                    <div className="font-bold text-xl mb-2 text-gray-700">{info.header}</div>
                                    <p className="text-gray-700 text-base">
                                    {info.paragraph1}
                                    </p>
                                    <p className="text-gray-700 text-base mt-3">
                                    {info.paragraph2}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                                </div>
                        </div>
                    ))}
                    </div>
                </div>

                <FooterComponent />
            </div>
        )
}

export default PageContent;