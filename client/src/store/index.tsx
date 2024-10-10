import { useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contexts from '@contexts';
import reducers from '@reducers';

const store = configureStore({
  reducer: combineReducers(reducers),
  devTools: APP_ENV !== 'production',
  preloadedState: contexts,
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the `Dispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// A base interface for emitting an action on the store
export interface DispatchAction {
  type: string;
  payload?: any;
}

// Custom name for creating a slice
export const useAppSelector = useSelector;

export default store;
