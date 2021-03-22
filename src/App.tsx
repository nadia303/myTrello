import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/board" component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
