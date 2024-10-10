import { AuthProvider } from 'react-oidc-context';
import { Provider as GlobalProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import store from '@store';

const clientId = APP_SSO_OAUTH_CLIENT_ID;
const openIdConnectUrl = APP_SSO_URL;
const redirectUri = APP_SSO_REDIRECT_URL;
const scope = APP_SSO_OAUTH_SCOPE;

const oidcConfig = {
  authority: openIdConnectUrl,
  client_id: clientId,
  redirect_uri: redirectUri,
  scope,
};

const queryClient = new QueryClient();

const AppContexts = ({ children }: { children: React.ReactElement }) => {
  return (
    <AuthProvider {...oidcConfig}>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider store={store}>
          {children}
        </GlobalProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default AppContexts;
