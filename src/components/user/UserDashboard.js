import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import CreateUser from './createUser/createUser';
import UserList from './userList/userList';
import UserDetails from './userDetails/userDetails';



const UserDashboard = () => {
  return (
    <div className="content">
      <div className="sub-header">
        <NavLink to="/user/create-user">Create User</NavLink>
        <NavLink to="/user/user-list">User List</NavLink>
        <NavLink to="/user/user-details">User Details</NavLink>
      </div>
      <Switch>
        <Route path="/user/create-user" component={CreateUser} />
        <Route path="/user/user-list" component={UserList} />
        <Route path="/user/user-details" component={UserDetails} />
      </Switch>
    </div>
  )
}

export default UserDashboard;
