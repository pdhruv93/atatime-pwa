import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProfilePage } from '../pages/ProfilePage';
import { App } from '../App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>error page</>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);
