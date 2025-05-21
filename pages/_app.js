// pages/_app.js
import '../styles/globals.css';
import Meta from '../components/Meta';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Meta />
      {GA_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
      )}
      {GA_ID && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname
            });
          `}
        </Script>
      )}
      <Script id="gtag-route" strategy="afterInteractive">
        {`
          (function() {
            const handleRouteChange = url => {
              gtag('config', '${GA_ID}', { page_path: url });
            };
            window.addEventListener('routeChangeComplete', e => handleRouteChange(e.detail));
          })();
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
