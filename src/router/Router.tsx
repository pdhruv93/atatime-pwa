import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProfilePage } from '../pages/ProfilePage';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/profile',
            element: <ProfilePage />,
        },
        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ]);

    return <RouterProvider router={router} />;
}
