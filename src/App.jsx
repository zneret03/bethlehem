import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Error from './page/404'
import ScrollToTop from './utils/ScrollToTop';
//components
const Root = lazy(() => import('./components/Root'));
const Church = lazy(() => import('./page/Church'));
const Music = lazy(() => import('./page/Music'));
const Ministries = lazy(() => import('./page/Ministries'));
const Events = lazy(() => import('./page/Events'));
const Leaders = lazy(() => import('./page/Leaders'));
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
              <Route exact path="/ministries" component={Ministries}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/leaders" component={Leaders}/>
              <Route exact component={Error}/>
          </Switch>
        </Suspense>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
