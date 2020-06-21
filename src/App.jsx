import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//components
import Root from './components/Root'
import Church from './page/Church'
import Music from './page/Music'
import Error from './page/404'
import ScrollToTop from './utils/ScrollToTop';

class App extends React.Component {
  render(){
    return (
      <Router>
        <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Root}/>
            <Route exact path="/church" component={Church}/>
            <Route exact path="/music" component={Music}/>
            <Route exact component={Error}/>
        </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
