import axios from 'axios';

const registerUser = ({ name, email, password }) => async dispatch => {
  const body = {name, email, password};
  try {
    const res = await axios.post('http://localhost:5000/api/user', body);
    console.log(body);
    dispatch ({
      type:'REGISTRATION_SUCCESS',
      payload: res.data
    });

  } catch(err) {
      dispatch({
        type: 'REGISTRATION_FAIL',
        payload: err
    });
  }

};

export default registerUser;
