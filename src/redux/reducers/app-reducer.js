const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const SET_USER = 'SET_USER';

export const ON_LOGIN = 'ON_LOGIN';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGOUT = 'ON_LOGOUT';

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const setUser = user => ({
  type: SET_USER,
  user,
});

// for saga

export const onLogin = (email, password) => ({
  type: ON_LOGIN,
  email,
  password,
});

export const onRegister = (email, password, repeatedPassword) => ({
  type: ON_REGISTER,
  email,
  password,
  repeatedPassword,
});

export const onLogout = () => ({
  type: ON_LOGOUT,
});

//

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default appReducer;
