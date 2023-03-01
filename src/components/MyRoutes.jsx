import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));

export default function MyRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </Suspense>
  );
}
