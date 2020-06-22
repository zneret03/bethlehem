import React from 'react';
import HeaderComponent from '../components/HeaderComponent'
const PageHeaderContent = ({Redirect, Title, Content, image}) => {
    return(
        <div className="w-screen bg-cover bg-no-repeat bg-center " style={{backgroundImage : `url(${require(`../image/${image}`)})`}}>
            <div className="flex justify-center flex-wrap items-center w-screen py-20">
                <div className="text-white sm:p-20 p-10">
                    <HeaderComponent redirect={Redirect} name={Title}>
                    <div className="sm:tracking-wider sm:text-5xl text-3xl">
                        <p className="text-center">{Content}</p>
                    </div>
                    </HeaderComponent>
                </div>
            </div>
        </div>
    );
}

export default PageHeaderContent;