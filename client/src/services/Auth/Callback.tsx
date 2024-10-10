import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

import Loading from '@components/shared/loading';

/**
 * A component for handling the middle step of retrieving
 * authentication tokens from the SSO server.
 */
const Callback = () => {
  // Expose ping and token from the store
  const auth = useAuth();
  const { user } = auth;

  const navigate = useNavigate();

  // If the token exists in store navigate to the home page
  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    // If the token is not yet available, render a spinner
    <Loading msg='Getting token ...' />
  );
};

export default Callback;
