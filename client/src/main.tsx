import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@app';
import AppContexts from '@src/AppContexts';

import '@src/index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <AppContexts>
        <Router>
          <App />
        </Router>
      </AppContexts>
    </StrictMode>,
  );
}
