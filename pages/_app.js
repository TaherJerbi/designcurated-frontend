import '../styles/globals.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/inter/500.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp