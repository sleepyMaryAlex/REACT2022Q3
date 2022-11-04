import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import formSlice from './formSlice';
import mainSlice from './mainSlice';
import localforage from 'localforage';

const mainPersistConfig = {
  key: 'main',
  storage: localforage,
  whitelist: ['currentPage, query, sorting, index'],
};

const formPersistConfig = {
  key: 'form',
  storage: localforage,
  whitelist: [
    'name',
    'image',
    'fileName',
    'status',
    'species',
    'checkedState',
    'gender',
    'date',
    'canSubmit',
    'displayErrorMessage',
    'canCheckMistakes',
    'characters',
    'displayMessage',
  ],
};

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainSlice),
  form: persistReducer(formPersistConfig, formSlice),
});

const persistConfig = {
  key: 'root',
  storage: localforage,
  whitelist: ['main', 'form'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
