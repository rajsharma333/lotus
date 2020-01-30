import switchSteps from '../actions/job';
const initialState = { };

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_STEPS':
      return state;
    default:
      return state;
  }
}

export default jobReducer;


//Switch steps
// show contract period based on job-type selected
// Submit
// submit time
//submit username
