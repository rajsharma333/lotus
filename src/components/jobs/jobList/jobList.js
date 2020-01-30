import React from 'react';
import axios from 'axios';
import './joblist.css';

class JobList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      joblist : []
    }
  }

  async componentDidMount(){
    const { data } = await axios.get('http://localhost:3000/jobs');
    console.log(data);
    this.setState({joblist:data});

  }

render(){
  return (
    <div className="job-list-wrapper">
      <table className="joblist" cellspacing="0">
        <tr>
          <td>Title</td>
          <td>Assignee</td>
          <td>Hiring Manager</td>
          <td>Posted on</td>
          <td>Status</td>
          <td>Profile</td>
        </tr>
        {this.state.joblist.map((job) => {
          return (
            <tr>
              <td className="display-flex">
                <span className={`initial-circle-${job.priority}`}>
                  {job.priority == 'High' ? 'H' : 'M'}
                </span>
                <span>
                {job.title} ({job.department})<br/>
                {job.location}
                </span>
              </td>
              <td>
                <img className="avatar-small mr10" src="../pic-rajeev.jpg"/>
                <span>Shipra Singh</span>
              </td>
              <td>{job.hiring_manager}</td>
              <td className="display-flex">
                <img className="avatar-small mr10" src="../pic-rajeev.jpg"/>
                <span>Shipra Singh<br/> <span className="clr-grey fs12">Dec 10, 2019</span></span>
              </td>
              <td>Active</td>
              <td>
                <span class="profiles total">
                  <i className="material-icons fl">visibility</i>
                  <span className="display-block fl">11</span>
                </span>
                <span class="profiles pending">
                  <i className="material-icons fl">notifications_none</i>
                  <span className="display-block fl">7</span>
                </span>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

}


export default JobList;
