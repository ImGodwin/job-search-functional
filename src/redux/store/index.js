import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import mainReducer from '../reducers'; */
import favoriteReducer from '../reducers/favoriteReducer';
import jobReducer from '../reducers/jobsReducers';
import searchJobs from '../reducers/searchJobsReducer';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobReducer,
  searchJobs: searchJobs,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
