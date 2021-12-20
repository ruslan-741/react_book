import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import screensReducer from './screensSlice';
import searchReducer from '../components/header/components/search/store';

const reducer = combineReducers({
  theme: themeReducer,
  screens: screensReducer,
  search: searchReducer,
});

const themeMiddleware = () => (next) => (action) => {
  const { payload, type: actionType } = action;

  if (actionType === 'theme/setThemeName' && typeof payload === 'string') {
    localStorage.setItem('themeName', payload);
  }

  next(action);
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([themeMiddleware]),
});
