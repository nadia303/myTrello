import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import HomeBoard from './pages/Home/components/Board/HomeBoard';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" exact component={Board} />
          <Route path="/board/:id" component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
