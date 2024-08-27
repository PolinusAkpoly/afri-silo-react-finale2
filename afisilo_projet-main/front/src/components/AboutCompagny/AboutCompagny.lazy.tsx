import React, { lazy, Suspense } from 'react';

const LazyAboutCompagny = lazy(() => import('./AboutCompagny'));

const AboutCompagny = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAboutCompagny {...props} />
  </Suspense>
);

export default AboutCompagny;
