import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//components
import Root from './components/Root'
import Church from './page/Church'
import Error from './page/404';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Root}/>
            <Route exact path="/church" component={Church}/>
            <Route exact component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
