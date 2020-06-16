import React from 'react';
import Home from '../page/Home';
import Navigation from './Navigation';
import Church from './Church';
class Root extends React.Component {
    render(){
        return(
            <>
                <Home />
                <Navigation />
                <Church/>
            </>
        )
    }
}

export default Root;