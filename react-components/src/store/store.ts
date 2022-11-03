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
import storage from 'redux-persist/lib/storage';
import mainSlice from './mainSlice';

const mainPersistConfig = {
  key: 'main',
  storage,
  whitelist: ['currentPage, query, sorting, index'],
};

const formPersistConfig = {
  key: 'form',
  storage,
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
  ],
};

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainSlice),
  form: persistReducer(formPersistConfig, formSlice),
});

const persistConfig = {
  key: 'root',
  storage,
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
