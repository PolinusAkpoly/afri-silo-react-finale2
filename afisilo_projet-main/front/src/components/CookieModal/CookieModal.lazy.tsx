//Generate with new-react-cli : Fri, 01 Jul 2022 15:57:04 GMT
//Free training on https://mudey.fr
import React, { lazy, Suspense } from 'react';

const LazyCookieModal = lazy(() => import('./CookieModal'));

const CookieModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCookieModal {...props} />
  </Suspense>
);

export default CookieModal;



















































//Generate with new-react-cli : Fri, 01 Jul 2022 15:57:04 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
