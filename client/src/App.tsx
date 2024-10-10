/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

import Callback from '@auth/Callback';

import reactLogo from '@assets/react.svg';
import viteLogo from '/vite.svg';

import '@src/App.css';

function App() {
  // Expose ping and token from the store
  const auth = useAuth();

  const {
    isAuthenticated = false,
    isLoading = false,
    // signinRedirect,
    user: authUser,
  } = auth;

  const [count, setCount] = useState(0);

  const getAuthToken = useCallback(
    async () => {
      try {
        /**
         * * This is where you would call the API to get the token
         * * and store it in session storage
         */
        // await signinRedirect();
        await Promise.resolve();
      } catch (error) {
        console.log(error);
      }
    },
    [
      // signinRedirect
    ],
  );

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  useEffect(() => {
    console.log({ isAuthenticated, isLoading, authUser });
    if (!isLoading && isAuthenticated && authUser) {
      console.log('User is authenticated - getting user from backend!');
    }
  }, [isAuthenticated, isLoading, authUser]);

  return (
    <main>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          type="button"
        >
          count is {count}
        </button>
        <p style={{ marginTop: '2em' }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Running in <strong>{APP_ENV}</strong> mode
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Callback />
    </main>
  );
}

export default App;
