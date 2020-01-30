import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav">
      <ul>
        <li>
          <NavLink to="/dashboard">
            <i className="material-icons">dashboard</i>Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/create-user">
            <i className="material-icons">face</i>Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/job/create-job">
            <i className="material-icons">post_add</i>Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/submit-profile">
            <i className="material-icons">attach_file</i>Profiles
          </NavLink>
        </li>
        <li>
          <NavLink to="/evaluate/creat-process">
            <i className="material-icons">device_hub</i>Evaluate
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LeftNav;
