import React, { lazy, Suspense } from 'react';

const LazySlogan = lazy(() => import('./Slogan'));

const Slogan = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySlogan {...props} />
  </Suspense>
);

export default Slogan;
