import React from 'react';
import axios from 'axios';
import './joblist.css';

class JobDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      joblist : []
    }
  }

  async componentDidMount(){
    const { data } = await axios.get('http://localhost:3000/jobs');
    //console.log(data);
    this.setState({joblist:data});

  }

render(){
  const jobs = this.state.joblist;
  return (
    <div className="job-list-wrapper">
      <div className="joblist p30" >
        <h3 className="align-left mb50">Senior Software Engineer (ID-MWK9893899)</h3>
        <div className="display-flex details fl">
          <div className="table-view">
            <div className="row">
              <span className="label">Department</span>
              <span className="colon">:</span>
              <span className="value">Technology</span>
            </div>
            <div className="row">
              <span className="label">Grade</span>
              <span className="colon">:</span>
              <span className="value">M1</span>
            </div>
            <div className="row">
              <span className="label">Location</span>
              <span className="colon">:</span>
              <span className="value">Gurgaon, India</span>
            </div>
            <div className="row">
              <span className="label">Priority</span>
              <span className="colon">:</span>
              <span className="value">High</span>
            </div>
            <div className="row">
              <span className="label">Position Type</span>
              <span className="colon">:</span>
              <span className="value">Full Time</span>
            </div>
            <div className="row">
              <span className="label">Experience</span>
              <span className="colon">:</span>
              <span className="value">4 - 7 years</span>
            </div>
            <div className="row">
              <span className="label">Education</span>
              <span className="colon">:</span>
              <span className="value">Graduate</span>
            </div>
            <div className="row">
              <span className="label">Hiring Manager</span>
              <span className="colon">:</span>
              <span className="value">Richa Sharma</span>
            </div>
          </div>
        </div>
        <div>
            ;ldfkgldfjg
        </div>
        <div class="clear"></div>
      </div>
    </div>
  )
}

}


export default JobDetails;
