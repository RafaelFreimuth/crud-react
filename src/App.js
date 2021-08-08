import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import { Editar } from './pages/editar/index';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:id" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;