import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LoginPage from './pages/Login';
import SigninPage from './pages/Signin';
import LoginSuccess from './pages/Auth/LoginSuccess';
import UserLayout from './layouts/UserLayout';
import HomeFunnelLayout from './layouts/HomeFunnelLayout';

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        // loader: AuthCheck.authPageCheck,
        element: <LoginPage />,
        handle: { isPublic: true },
      },
      {
        path: 'signin',
        // loader: AuthCheck.authPageCheck,
        element: <SigninPage />,
        handle: { isPublic: true },
      },
      {
        path: 'login/success',
        element: <LoginSuccess />,
        handle: { isPublic: true },
      },
      {
        path: 'home',
        element: <HomeFunnelLayout />,
        handle: { isPublic: true }, 
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={publicRoutes} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default App;
