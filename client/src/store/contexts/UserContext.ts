/**
 * Store sub context for user data
 */
export interface TUserContext {
  sessionId: string | null;
  user: any;
}

const UserContext = {
  sessionId: null,
  user: {},
};

export default UserContext;
