# React + TypeScript + Vite + Vitest + Cypress

This template provides a minimal setup to get React working in Vite with HMR, path aliases, testing framework with API mock and some ESLint rules.

It also includes a React-OIDC-Context lib for interacting with PING Fed and a React Query provider for using queries with API calls
for caching and real-time updates

## .env Files

```bash
.env                 # loaded in all cases
.env.local           # loaded in all cases, ignored by git
.env.[mode]          # only loaded in specified mode
.env.[mode].local    # only loaded in specified mode, ignored by git
```

## Current .env local settings

```text
VITE_SSO_URL=
VITE_SSO_REDIRECT_URL=https://localhost:3000/callback
VITE_SSO_OAUTH_CLIENT_ID=
VITE_SSO_OAUTH_SCOPE=
VITE_ENV=qa # "staging" and "production" for those environments and any other value for local or qa
# VITE_BASE_API_URL=
```

Sample added - needs to be converted to be ignored

## Coverage

[Tests]()
