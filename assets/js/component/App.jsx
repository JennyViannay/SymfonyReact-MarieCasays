import React from 'react';
import Article from './Article';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Article} />
        </Switch>
      </div>
    </Router>
    </div>
  );
};


export default App;