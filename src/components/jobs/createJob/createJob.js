import React from 'react';
import axios from 'axios';
import './createJob.css';

class CreateJob extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      department: '',
      grade: '',
      reporting_manager: '',
      hiring_manager: '',
      location: '',
      priority: '',
      pos_type: '',
      contract_duration: '',
      keywords: [],
      primarySkills: '',
      secondarySkills: '',
      jobDescription: '',
      min_exp: '',
      max_exp: '',
      education: '',
      joiningTime: '',
      minSalary: '',
      maxSalary: '',
      selectedTab : 'primary-details'
    }
  }

  handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/jobs', this.state)
    console.log(this.state);
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state);
  };

  selectedTab = (e) => {
    this.setState({...this.state, selectedTab : e.target.id});
    console.log(this.state.selectedTab);

  };

  render(){
    return (
      <div className="single-col-form job-form">
        <form>
        <div className="tabs">
          <a className="active" id="primary-details" href="">Primary Details</a>
          <a href="javascript:void(0)"  id="skills" onClick={this.selectedTab}>Skills</a>
          <a href="javascript:void(0)"  id="job-description" onClick={this.selectedTab}>Job Description</a>
          <a href="javascript:void(0)"  id="interview-process" onClick={this.selectedTab}>Interview Process</a>
        </div>

      { this.state.selectedTab == 'primary-details' ? (
        <div className="form">
        <div>
          <label>Title</label>
          <input type="text" placeholder="Job Title" autocomplete="off" name="title" value={this.state.title} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Department</label>
          <input type="text" placeholder="Department" autocomplete="off" name="department" value={this.state.department} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Grade</label>
          <input type="text" placeholder="Grade" autocomplete="off" name="grade" value={this.state.grade} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Reporting Manager</label>
          <input type="text" placeholder="Reporting Manager" autocomplete="off" name="reporting_manager" value={this.state.reporting_manager} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Hiring Manager</label>
          <input type="text" placeholder="Hiring Manager" autocomplete="off" name="hiring_manager" value={this.state.hiring_manager} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Location</label>
          <input type="text" placeholder="Location" autocomplete="off" name="location" value={this.state.location} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Priority</label>
          <input type="text" placeholder="Priority" autocomplete="off" name="priority" value={this.state.priority} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Position Type</label>
          <input type="text" placeholder="Position Type" autocomplete="off" name="pos_type" value={this.state.pos_type} onChange={this.handleOnChange}/>
        </div>
        </div>
      ) : null }

      { this.state.selectedTab == 'skills' ? (
        <div className="form">
        <h3>Skills Details</h3>
        <div>
          <label>Keywords</label>
          <input type="text" placeholder="Keywords" autocomplete="off" name="keywords" value={this.state.keywords} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Primary Skills</label>
          <input type="text" placeholder="Primary Skills" autocomplete="off" name="primary_skills" value={this.state.primary_skills} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Secondary Skills</label>
          <input type="text" placeholder="Secondary Skills" autocomplete="off" name="secondary_skills" value={this.state.secondary_skills} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Job Description</label>
          <input type="text" placeholder="Job Description" autocomplete="off" name="job_description" value={this.state.job_description} onChange={this.handleOnChange}/>
        </div>
        <div className="divided">
          <label>Experience</label>
          <input type="text" placeholder="Min" autocomplete="off" name="min_experience" value={this.state.min_experience} onChange={this.handleOnChange}/>
          <input type="text" placeholder="Max" autocomplete="off" name="max_experience" value={this.state.max_experience} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Education</label>
          <input type="text" placeholder="Education" autocomplete="off" name="education" value={this.state.education} onChange={this.handleOnChange}/>
        </div>
        <div>
          <label>Joining Time</label>
          <input type="text" placeholder="Joining Time" autocomplete="off" name="joining_time" value={this.state.joining_time} onChange={this.handleOnChange}/>
        </div>
        <div className="divided">
          <label>Salary</label>
          <input type="text" placeholder="Min" autocomplete="off" name="min_salary" value={this.state.min_salary} onChange={this.handleOnChange}/>
          <input type="text" placeholder="Max" autocomplete="off" name="max_salary" value={this.state.max_salary} onChange={this.handleOnChange}/>
        </div>
        </div>
      ) : null }

      { this.state.selectedTab == 'job-description' ? (
        <div className="form">JD</div>

      ) : null }
        <div className="display-block align-right mt20">
          <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
        </div>
        </form>
      </div>
    )
  }


}

export default CreateJob;
