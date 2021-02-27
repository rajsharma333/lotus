import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Template from './components/template/Template';
import LoginRegister from './components/login/LoginRegister';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sampleState : 5
    }
  }

render(){
  return (
    <div className="App" data-test="component-app">
      <Switch>
        <Route path="/login" component={LoginRegister} />
        <Route exact path="/" component={Template} />
      </Switch>
      <Template/>
    </div>
  );
}
}

export default App;
