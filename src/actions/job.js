const switchSteps = () => {
  return {
    type: 'SWITCH_STEPS',
    payload: 'switch'
  }
}

export default switchSteps;














/**import axios from 'axios';

export const getCurrentJob = () => async dispatch => {
  try {
    const res = await asios.get('http://localhost:3000/jobs');

    dispatch({
      type: GET_JOB,
      payload: res.data
    })
  } catch {

  }
}**/
