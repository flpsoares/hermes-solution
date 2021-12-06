import Script from 'next/script'
import GlobalStyle from '../styles/global'

import { BudgetProvider } from '../contexts/BudgetContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <BudgetProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </BudgetProvider>
    </>
  )
}

export default MyApp
