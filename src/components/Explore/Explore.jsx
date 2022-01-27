import { Container, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ClientOnly from "../ClientOnly";
import SearchBar from "../SearchBar";
import ImageGrid from "../ImageGrid";

function Explore(){
  const [internalSearch, setInternalSearch] = useState('')
  const [search, setSearch] = useState(internalSearch)
  const handleChange = (e)=>setInternalSearch(e.target.value)
  const handleSlashClick = () => setSearch(internalSearch)
  return (
    <Container py={5} h='100vh' w='full' maxWidth="container.lg">
      <VStack spacing={100}>
        <SearchBar value={internalSearch} onChange={handleChange} onSlashClick={handleSlashClick}/>
        <ClientOnly>
          <ImageGrid search={search} />
        </ClientOnly>
      </VStack>
    </Container>
  )
}
export default Explore