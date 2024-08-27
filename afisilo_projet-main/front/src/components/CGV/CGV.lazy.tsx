import React, { lazy, Suspense } from 'react';

const LazyCGV = lazy(() => import('./CGV'));

const CGV = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCGV {...props} />
  </Suspense>
);

export default CGV;
