import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from '@routes/AppRoutes';
import GlobalStyle from '@layout/GlobalStyle';
import { store } from '@store/store';
import { setToken } from '@store/userSlice';

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedToken = localStorage.getItem('jwtToken');
    if (savedToken) {
      dispatch(setToken({ token: savedToken }));
    }
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <AppRoutes />
    </QueryClientProvider>
  );
};

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;
