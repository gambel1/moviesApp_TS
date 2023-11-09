import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const VolumeUp = lazy(() => import('../../pages/VolumeUp'));
const Projects = lazy(() => import('../../pages/Projects'));
const PageDetails = lazy(() => import('../../pages/PageDetails'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<VolumeUp />} />
            <Route path="/movies" element={<Projects />} />
            <Route path="/movies/:movieId/*" element={<PageDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
