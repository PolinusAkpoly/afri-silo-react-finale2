import React, { lazy, Suspense } from 'react';

const LazyPlanVols = lazy(() => import('./PlanVols'));

const PlanVols = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPlanVols {...props} />
  </Suspense>
);

export default PlanVols;
