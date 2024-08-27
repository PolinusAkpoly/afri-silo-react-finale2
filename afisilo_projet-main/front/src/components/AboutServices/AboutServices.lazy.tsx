import React, { lazy, Suspense } from 'react';

const LazyAboutServices = lazy(() => import('./AboutServices'));

const AboutServices = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAboutServices {...props} />
  </Suspense>
);

export default AboutServices;
