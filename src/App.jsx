import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//components
import Root from './components/Root'
import Error from './page/404';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Root}/>
        <Route exact component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
