export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const GET_JOB = 'GET_JOB';
export const SEARCH_JOBS = 'SEARCH_JOBS';
export const GET_JOB_LOADING_ON = 'GET_JOB_LOADING_ON';
export const GET_JOB_LOADING_OFF = 'GET_JOB_LOADING_OFF';
export const HAS_ERROR = 'HAS_ERROR';

export const addToFavorites = (companyName) => ({ type: ADD_TO_FAVORITES, payload: companyName });
export const removeFromFavorites = (companyName) => ({ type: REMOVE_FROM_FAVORITES, payload: companyName });
export const hasErrorFunction = (message) => ({ type: HAS_ERROR, payload: message });
//the Action Creators that returns the action

export const getJobsAction = () => {
  return async (dispatch, getState) => {
    /* const getJobs = async () => { */
    try {
      const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=');
      if (response.ok) {
        let fetchedJobs = await response.json();
        /* setJobs(data); */
        //console.log(data);
        dispatch({ type: GET_JOB, payload: fetchedJobs });
      } else {
        switch (response.status) {
          case 404:
            throw new Error("there's a problem 404");

          case 400:
            throw new Error("there's a problem 400");

          default:
            throw new Error("there's a problem");
        }
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: HAS_ERROR, payload: error.message });
    } finally {
      dispatch({ type: GET_JOB_LOADING_OFF });
    }
  };
};
//}

/* export const searchJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        /* setJobs(data); */
//dispatch({ type: SEARCH_JOBS, payload: data });
//} else {
//alert('Error fetching results');
//}
//} catch (error) {
//console.log(error);
//}
//};
//}; */
