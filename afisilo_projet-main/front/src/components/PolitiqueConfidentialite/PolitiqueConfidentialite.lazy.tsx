import React, { lazy, Suspense } from 'react';

const LazyPolitiqueConfidentialite = lazy(() => import('./PolitiqueConfidentialite'));

const PolitiqueConfidentialite = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPolitiqueConfidentialite {...props} />
  </Suspense>
);

export default PolitiqueConfidentialite;
