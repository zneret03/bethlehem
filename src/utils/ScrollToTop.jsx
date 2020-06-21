import React, {useEffect, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollToTop = ({history, children}) => {

    useEffect(() => {
        const unlisiten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisiten();
        }
    })

    return <Fragment>{children}</Fragment>
    
}

export default withRouter(ScrollToTop);