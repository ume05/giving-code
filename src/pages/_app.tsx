import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import '@/styles/global.css'

export const client = new ApolloClient({
  uri:
    'https://api-ap-northeast-1.graphcms.com/v2/ckkkctgxq22nq01waeyp43swo/master',
  cache: new InMemoryCache()
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
