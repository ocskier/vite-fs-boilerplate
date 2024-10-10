import { afterEach, expect } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import AppContexts from '@src/AppContexts';

// This sets the mock adapter on the default instance
const httpAdapter = new MockAdapter(axios, { onNoMatch: 'throwException' });

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <AppContexts>{children}</AppContexts>,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, expect as vi_expect, httpAdapter };
