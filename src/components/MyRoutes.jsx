import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
// const NewsPage = lazy(() => import('pages/NewsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export default function MyRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/friends" element={<FriendsPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
}
