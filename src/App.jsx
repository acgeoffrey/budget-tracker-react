import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import store from './store';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Records from './pages/Records';
import Calendar from './pages/Calendar';
import Tags from './pages/Tags';
import Budgets from './pages/Budgets';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './ui/ProtectedRoute';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
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
                <Route path='tags' element={<Tags />} />
                <Route path='budgets' element={<Budgets />} />
                <Route path='settings' element={<Settings />} />
              </Route>

              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position='top-right'
            gutter={12}
            containerClassName='text-base m-2 px-5 py-3 text-gray-700'
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
            }}
          />
        </LocalizationProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
