/// <reference types="./component" />
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import { MemoryRouter as Router } from 'react-router-dom';
import AppContexts from '../../src/AppContexts';
import './commands';
import '../../src/index.css';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

Cypress.Commands.add(
  'mount',
  (
    ui: React.ReactElement,
    { routeEntries = ['/'], ...restOptions }: any = {},
  ) => {
    const wrapped = (
      <AppContexts>
        <Router initialEntries={routeEntries}>{ui}</Router>
      </AppContexts>
    );
    return mount(wrapped, restOptions);
  },
);
