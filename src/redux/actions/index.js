export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (companyName) => ({ type: ADD_TO_FAVORITES, payload: companyName });
export const removeFromFavorites = (companyName) => ({ type: REMOVE_FROM_FAVORITES, payload: companyName });

//the Action Creators that returns the action

/* export const getJobsaction = () => {
    return async (dispatch, getState) => {
        
    }
} */
