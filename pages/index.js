import { Box } from '@chakra-ui/react'
import Layout from '../src/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Box bgColor="gray.200" w="full" h="100vh">
        <p>Hello world</p>
      </Box>
    </Layout>
    
  )
}
