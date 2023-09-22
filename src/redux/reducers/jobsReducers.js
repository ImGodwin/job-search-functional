import { GET_JOB, GET_JOB_LOADING_OFF, GET_JOB_LOADING_ON, HAS_ERROR } from '../actions';

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMsg: '',
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case GET_JOB_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOB_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
export default jobReducer;
