import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import './styles.global.css'
import { client } from '@/client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
