import { GET_JOB } from '../actions';

const initialState = {
  content: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};
export default jobReducer;
