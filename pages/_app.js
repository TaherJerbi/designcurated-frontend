import '../styles/globals.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/inter/500.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import theme from '../src/theme'
import client from '../apollo-client'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp