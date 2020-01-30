import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import CreateJob from './createJob/createJob';
import JobList from './jobList/jobList';
import JobDetails from './jobDetails/jobDetails';



const JobDashboard = () => {
  return (
    <div className="content">
      <div className="sub-header">
        <NavLink to="/job/create-job">Create Job</NavLink>
        <NavLink to="/job/job-list">Job List</NavLink>
        <NavLink to="/job/job-details">Job Details</NavLink>
      </div>
      <Switch>
        <Route path="/job/create-job" component={CreateJob} />
        <Route path="/job/job-list" component={JobList} />
        <Route path="/job/job-details" component={JobDetails} />
      </Switch>
    </div>
  )
}

export default JobDashboard;
