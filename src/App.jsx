import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import 'react-datepicker/dist/react-datepicker.css';
import { Suspense, lazy } from 'react';
import Loader from './ui/Loader';

// import store from './store';

// import AppLayout from './ui/AppLayout';
// import Dashboard from './pages/Dashboard';
// import Records from './pages/Records';
// import Calendar from './pages/Calendar';
// import Tags from './pages/Tags';
// import Budgets from './pages/Budgets';
// import Settings from './pages/Settings';
// import PageNotFound from './pages/PageNotFound';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import ProtectedRoute from './ui/ProtectedRoute';
// import AuthLayout from './ui/AuthLayout';
// import ForgetPassword from './pages/ForgetPassword';
// import ResetPassword from './pages/ResetPassword';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const ProtectedRoute = lazy(() => import('./ui/ProtectedRoute'));
const AuthLayout = lazy(() => import('./ui/AuthLayout'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Records = lazy(() => import('./pages/Records'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Tags = lazy(() => import('./pages/Tags'));
const Settings = lazy(() => import('./pages/Settings'));
// const Budgets = lazy(() => import('./pages/Budgets'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgetPassword = lazy(() => import('./pages/ForgetPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

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

      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
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
                {/* <Route path='budgets' element={<Budgets />} /> */}
                <Route path='settings' element={<Settings />} />
              </Route>
              <Route element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='forgetpassword' element={<ForgetPassword />} />
                <Route
                  path='resetpassword/:token'
                  element={<ResetPassword />}
                />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

        <Toaster
          position='top-right'
          gutter={12}
          containerClassName='text-base m-2 px-5 py-3 text-gray-mildDark'
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
    </QueryClientProvider>
  );
}

export default App;
