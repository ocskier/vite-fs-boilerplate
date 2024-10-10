import ACTION_TYPES from '@store/actionTypes';

import { DispatchAction } from '@store';

/**
 * State dispatch service for updating user context
 */
export default function reducer(state: any, { type, payload }: DispatchAction) {
  switch (type) {
    case ACTION_TYPES.USER.SET_SESSION_ID:
      return { ...state, sessionId: payload };
    case ACTION_TYPES.USER.SET_USER:
      return { ...state, user: { ...payload } };
    default:
      return { ...state };
  }
}
