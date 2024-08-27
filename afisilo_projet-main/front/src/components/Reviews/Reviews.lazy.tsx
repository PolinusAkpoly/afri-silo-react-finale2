import React, { lazy, Suspense } from 'react';

const LazyReviews = lazy(() => import('./Reviews'));

const Reviews = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReviews {...props} />
  </Suspense>
);

export default Reviews;
