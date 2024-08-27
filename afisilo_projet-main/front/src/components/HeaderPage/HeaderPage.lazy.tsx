import React, { lazy, Suspense } from 'react';

const LazyHeaderPage = lazy(() => import('./HeaderPage'));

const HeaderPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode, name: string}) => (
  <Suspense fallback={null}>
    <LazyHeaderPage {...props} />
  </Suspense>
);

export default HeaderPage;
