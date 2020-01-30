const initialState = {
  token : '',
  isAuthenticated: null,
  loading: true,
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      //localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading:false
      }
    case 'REGISTRATION_FAIL':
    //  localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
};

export default authReducer;
