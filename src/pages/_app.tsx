import GlobalStyle from '../styles/global'

import Head from 'next/head'
import { BudgetProvider } from '../contexts/BudgetContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BudgetProvider>
        <Head>
          <title>Hermes Solution</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </BudgetProvider>
    </>
  )
}

export default MyApp
