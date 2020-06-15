import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './page/404';
function App() {
  return (
    <Router>
      <Switch>
      <>
        <Route component={Error}/>
      </>
      </Switch>
    </Router>
  );
}

export default App;
