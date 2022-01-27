import { Container, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ClientOnly from "../ClientOnly";
import SearchBar from "../SearchBar";
import ImageGrid from "../ImageGrid";

function Explore(){
  const [search, setSearch] = useState('')
  const handleChange = (e)=>setSearch(e.target.value)
  return (
    <Container py={5} h='100vh' w='full' maxWidth="container.lg">
      <VStack spacing={100}>
        <SearchBar value={search} onChange={handleChange}/>
        <ClientOnly>
          <ImageGrid search={search} />
        </ClientOnly>
      </VStack>
    </Container>
  )
}
export default Explore