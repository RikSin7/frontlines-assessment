import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CoursesPage from '../features/courses/CoursesPage';
import Error from '../shared/ui/Error';

export const router = createBrowserRouter([
 {
 path: '/',
 element: <MainLayout />,
 children: [
 {
 index: true,
 element: <CoursesPage />,
 },
 {
 path: '*',
 element: <Error message="The page you are looking for doesn't exist or may have been moved."onRetry={() => window.location.reload()} />,
 },
 ],
 },
]);