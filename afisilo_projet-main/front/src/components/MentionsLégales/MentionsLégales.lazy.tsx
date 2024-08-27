import React, { lazy, Suspense } from 'react';

const LazyMentionsLégales = lazy(() => import('./MentionsLégales'));

const MentionsLégales = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMentionsLégales {...props} />
  </Suspense>
);

export default MentionsLégales;
