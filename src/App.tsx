// import DisplayComponents from './components/molecules/display.component';
// import HomePage from './pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './pages/Layout/RootElement';
import HomePage from './pages/HomePage';
import {
  LoginPage,
  RegisterPage,
  loginAction,
  registerAction,
} from './pages/AuthPage';
import NotFoundPage from './pages/404Page';
import DashBoardLayout, {
  loader as dashboardLoader,
} from './pages/Layout/DashBoardLayout';
import { Toaster } from 'react-hot-toast';

// import EventPage, {
//   loader as eventsLoader,
// } from './pages/ProtectedPages/EventPage';
import Transations from './pages/ProtectedPages/Transations';
import DirectorsDashBoard from './pages/DirectorsDashBoard';
import UserProfilePage from './pages/ProtectedPages/UserProfilePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

import TimetableComponent from './components/molecules/timetableheader/timetableComponent';
import Time_table_add from './components/molecules/timetableheader/time-table-add';

import AddStudent from './pages/ProtectedPages/addStudent/AddStudent';

import AddTeacher from './pages/ProtectedPages/addTeacher/AddTeacher';
import { AuthenticationLayout } from './pages/Layout/AuthLayout';
import EventPage from './pages/ProtectedPages/EventPage';
import TeacherForm from './components/molecules/forms/TeacherForm.molecule';
import AccountsPage from './pages/ProtectedPages/AccountsPage';
import AllStudents, {
  allStudentLoader,
} from './pages/ProtectedPages/AllStudents';
import Performance from './pages/TeacherDashboard/Performance';
import PaymentForm from './pages/TuitionPayment/PaymentForm';
import StudentCard from './components/molecules/student-card-component/Student-card.components';

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   refetchOnMount: false
    // },
    mutations: {},
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <ContactUs />,
        path: 'contact',
      },
      {
        element: <AboutUs />,
        path: 'about',
      },
      {
        path: 'timetable',
        element: <TimetableComponent />,
      },

      {
        path: 'timetableadd',
        element: <Time_table_add />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthenticationLayout />,
    children: [
      {
        index: true,
        action: loginAction,

        element: <LoginPage />,
      },
      {
        path: 'register',
        action: registerAction,
        element: <RegisterPage />,
      },
    ],
  },
  // add student path

  {
    path: 'addTeacher',
    element: <AddTeacher />,
    // children: [
    //   {
    //     index: true,
    //     element: <LoginPage />,
    //   },

    // ],
  },
  {
    path: 'dashboard',
    element: <DashBoardLayout />,
    loader: dashboardLoader(queryClient),
    children: [
      {
        index: true,
        element: <DirectorsDashBoard />,
      },
      {
        path: 'event',
        element: <EventPage />,
        // loader: eventsLoader,
      },
      {
        path: 'performance',
        element: <Performance />,
      },
      {
        path: 'transactions',
        element: <Transations />,
      },
      {
        path: 'accounts',
        element: <AccountsPage />,
      },
      {
        path: 'statistics',
        element: <DirectorsDashBoard />,
      },
      {
        path: 'profile',
        element: <TeacherForm />,
      },
      {
        // loader: allStudentLoader(queryClient)
        path: 'addStudent',
        element: <AddStudent />,
      },
      {
        path: 'all-students',
        element: <AllStudents />,
        loader: allStudentLoader(queryClient),
        // path: 'addStudent',
        // element: <AddStudent />,
      },
      {
        path: 'students',
        element: <StudentCard />,
        loader: allStudentLoader(queryClient),
      },

      {
        path: 'addTeacher',
        element: <AddTeacher />,
      },
      {
        path: 'feesPayment',
        element: <PaymentForm />,
      },
      {
        path: ':id/profile',
        element: <UserProfilePage />,
        children: [
          {
            index: true,
            element: <div>some update profile page here</div>,
          },
          {
            path: 'transactions',
            element: <EventPage />,
            // loader: eventsLoader,
          },
        ],
      },

      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools position="bottom" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
