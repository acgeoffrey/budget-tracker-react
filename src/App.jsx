import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Records from './pages/Records';
import Calendar from './pages/Calendar';
import Budgets from './pages/Budgets';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='records' element={<Records />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='budgets' element={<Budgets />} />
            <Route path='settings' element={<Settings />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
