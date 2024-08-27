import React, { lazy, Suspense } from 'react';

const LazyCallToAction = lazy(() => import('./CallToAction'));

const CallToAction = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCallToAction {...props} />
  </Suspense>
);

export default CallToAction;
