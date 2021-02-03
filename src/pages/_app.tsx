import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/styles/global.css'

export const client = new ApolloClient({
  uri:
    'https://api-ap-northeast-1.graphcms.com/v2/ckkkctgxq22nq01waeyp43swo/master',
  cache: new InMemoryCache()
})

nprogress.configure({ showSpinner: true, speed: 400, minimum: 0.25 })

function App({ Component, pageProps }: AppProps) {
  if (process.browser) {
    nprogress.start()
  }
  useEffect(() => {
    nprogress.done()
  })
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
