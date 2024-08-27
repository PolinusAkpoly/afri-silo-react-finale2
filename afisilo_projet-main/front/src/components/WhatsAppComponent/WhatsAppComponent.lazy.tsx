//Generate with new-react-cli : Sat, 16 Jul 2022 08:09:29 GMT
//Free training on https://mudey.fr
import React, { lazy, Suspense } from 'react';

const LazyWhatsAppComponent = lazy(() => import('./WhatsAppComponent'));

const WhatsAppComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWhatsAppComponent {...props} />
  </Suspense>
);

export default WhatsAppComponent;



















































//Generate with new-react-cli : Sat, 16 Jul 2022 08:09:29 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
