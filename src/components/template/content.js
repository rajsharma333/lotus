import React from 'react';
import { Switch, Route } from 'react-router-dom';

import JobDashboard from '../jobs/JobDashboard';



const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/job" component={JobDashboard} />
        <Route path="/User" component={JobDashboard} />
      </Switch>
    </div>
  )
}

export default Content;
