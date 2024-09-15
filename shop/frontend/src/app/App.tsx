import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Redux store import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './routes';
import GlobalStyle from './GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyle />
        <AppRoutes />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
