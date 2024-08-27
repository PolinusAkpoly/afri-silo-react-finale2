import React, { lazy, Suspense } from 'react';

const LazyContactForm = lazy(() => import('./ContactForm'));

const ContactForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContactForm {...props} />
  </Suspense>
);

export default ContactForm;
