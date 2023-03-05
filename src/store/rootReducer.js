import { combineReducers } from 'redux';
import authReducer from './authReducer/authSlice';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsReducer/contactsSlice';
import filterReducer from './filterReducer/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';

const persistedConfig = {
  key: `token`,
  storage,
  whitelist: ['token', 'userName', 'userEmail'],
};

export const persistedAuthReducer = persistReducer(
  persistedConfig,
  authReducer
);

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});
