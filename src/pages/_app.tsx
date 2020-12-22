import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import { SpeechProvider } from '@speechly/react-client'
import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'
import { contextReducer, ExpenseProvider, initialState } from '~/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={themes.dark}>
        {/* <SpeechProvider
          appId="96718987-6693-41e7-aff3-61520ebc1f2b"
          language="en-US"
        > */}
        <GlobalStyle />
        <ExpenseProvider
          initialState={initialState}
          contextReducer={contextReducer}
        >
          <Component {...pageProps} />
        </ExpenseProvider>
        {/* </SpeechProvider> */}
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
