//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on https://mudey.fr
import React, { lazy, Suspense } from 'react';

const LazyHomeServices = lazy(() => import('./HomeServices'));

const HomeServices = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeServices {...props} />
  </Suspense>
);

export default HomeServices;



















































//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
