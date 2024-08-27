//Generate with new-react-cli : Sun, 03 Jul 2022 13:44:28 GMT
//Free training on https://mudey.fr
import React, { lazy, Suspense } from 'react';

const LazyTestForm = lazy(() => import('./TestForm'));

const TestForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTestForm {...props} />
  </Suspense>
);

export default TestForm;



















































//Generate with new-react-cli : Sun, 03 Jul 2022 13:44:28 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
