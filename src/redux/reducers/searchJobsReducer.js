import { SEARCH_JOBS } from '../actions';

const initialState = {
  searchJobContent: [],
};

const searchJobs = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        searchJobContent: action.payload,
      };

    default:
      return state;
  }
};
export default searchJobs;
