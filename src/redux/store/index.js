import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import mainReducer from '../reducers'; */
import favoriteReducer from '../reducers/favoriteReducer';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
