import React, { lazy, Suspense } from 'react';

const LazyPartenaires = lazy(() => import('./Partenaires'));

const Partenaires = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPartenaires {...props} />
  </Suspense>
);

export default Partenaires;
