import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Template from './components/template/Template';
import LoginRegister from './components/login/LoginRegister';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginRegister} />
        <Route exact path="/" component={Template} />
      </Switch>
      <Template/>
    </div>
  );
}

export default App;
