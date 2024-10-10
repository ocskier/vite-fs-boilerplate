import { createAction } from '@reduxjs/toolkit';

import ACTION_TYPES from '@store/actionTypes';

/**
 * All global actions on store by context
 */

// USER
export const setSessionId = createAction<string | null>(
  ACTION_TYPES.USER.SET_SESSION_ID,
);

export const setUser = createAction<any>(ACTION_TYPES.USER.SET_USER);
