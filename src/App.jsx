import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Error from './page/404'
import ScrollToTop from './utils/ScrollToTop';
//components
const Root = lazy(() => import('./components/Root'));
const Church = lazy(() => import('./page/Church'));
const Music = lazy(() => import('./page/Music'));
class App extends React.Component {
  render(){
    return (
      <Router>
        <ScrollToTop>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Switch>
              <Route exact path="/" component={Root}/>
              <Route exact path="/church" component={Church}/>
              <Route exact path="/music" component={Music}/>
              <Route exact component={Error}/>
          </Switch>
        </Suspense>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
