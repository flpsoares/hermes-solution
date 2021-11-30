import GlobalStyle from '../styles/global'

import { BudgetProvider } from '../contexts/BudgetContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BudgetProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </BudgetProvider>
    </>
  )
}

export default MyApp
