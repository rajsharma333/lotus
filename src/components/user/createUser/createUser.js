import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users : [ ]
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = async(e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title,
      password: this.state.password,
      mobile: this.state.mobile,
      location: this.state.location,
      department: this.state.department,
      role: this.state.role,
      orgId: this.state.orgId,
    };
      const { data: users } = await axios.post("http://localhost:3000/users", user);
      console.log(users);

  }

  render(){
    return (
      <form className="register-form" onSubmit={this.onSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.onChange}/>
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={this.state.firstname} onChange={this.onChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.onChange}/>
        </div>
        <div>
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
        </div>
        <div>
          <label>Mobile</label>
          <input type="text" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.onChange}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.onChange}/>
        </div>
        <div>
          <label>Department</label>
          <input type="text" name="department" placeholder="Department" value={this.state.department} onChange={this.onChange}/>
        </div>
        <div>
          <label>Role</label>
          <input type="text" name="role" placeholder="Role" value={this.state.role} onChange={this.onChange}/>
        </div>
        <div>
          <label>Organization ID</label>
          <input type="text" name="orgId" placeholder="Organization ID" value={this.state.orgId} onChange={this.onChange}/>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    )
  }


}

export default CreateUser;
