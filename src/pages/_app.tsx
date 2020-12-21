import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'
import { contextReducer, ExpenseProvider, initialState } from '~/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <ExpenseProvider
          initialState={initialState}
          contextReducer={contextReducer}
        >
          <Component {...pageProps} />
        </ExpenseProvider>
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
