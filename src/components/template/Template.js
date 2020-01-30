import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './template.css';
import Header from './header';
import LeftNav from './leftNav';
import JobDashboard from '../jobs/JobDashboard';
import UserDashboard from '../user/UserDashboard';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <section className="display-flex">
        <LeftNav />
        <div className="content">
          <Switch>
            <Route path="/job" component={JobDashboard} />
            <Route path="/user" component={UserDashboard} />
          </Switch>
        </div>
      </section>
    </div>
  )
}

export default Layout;
