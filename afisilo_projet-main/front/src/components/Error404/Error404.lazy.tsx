import React, { lazy, Suspense } from 'react';

const LazyError404 = lazy(() => import('./Error404'));

const Error404 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyError404 {...props} />
  </Suspense>
);

export default Error404;
