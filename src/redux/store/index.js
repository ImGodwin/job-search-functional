import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import mainReducer from '../reducers'; */
import favoriteReducer from '../reducers/favoriteReducer';
import jobReducer from '../reducers/jobsReducers';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
