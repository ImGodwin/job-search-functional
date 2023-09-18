export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const GET_JOB = 'GET_JOB';

export const addToFavorites = (companyName) => ({ type: ADD_TO_FAVORITES, payload: companyName });
export const removeFromFavorites = (companyName) => ({ type: REMOVE_FROM_FAVORITES, payload: companyName });

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
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//}
