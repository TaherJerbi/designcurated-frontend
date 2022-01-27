import { Container, Flex, VStack } from '@chakra-ui/react'
import Layout from '../src/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.xl" p={0}>
        <Flex h='100vh' direction={{
          base: 'column-reverse',
          md:'row'
        }}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.100">
            Hello world
          </VStack>
        </Flex>
      </Container>  
    </Layout>
    
  )
}
