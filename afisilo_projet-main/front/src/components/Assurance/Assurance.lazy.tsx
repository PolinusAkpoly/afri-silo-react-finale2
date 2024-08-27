import React, { lazy, Suspense } from 'react';

const LazyAssurance = lazy(() => import('./Assurance'));

const Assurance = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAssurance {...props} />
  </Suspense>
);

export default Assurance;
