import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from 'shared/components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export default function MyRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </Suspense>
  );
}
