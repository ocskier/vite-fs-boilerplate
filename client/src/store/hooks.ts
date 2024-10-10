import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@store';

import { TUserContext } from '@contexts/UserContext';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppUser: () => TUserContext = () =>
  useAppSelector((state) => state.User);
export const useAppAuthorizedUser: () => any = () =>
  useAppSelector((state) => state.User.user);
