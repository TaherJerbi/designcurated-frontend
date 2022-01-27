import { Container, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ClientOnly from "../ClientOnly";
import ImageCard from "../ImageCard";
import SearchBar from "../SearchBar";


function Explore(){
  const [search, setSearch] = useState('')
  const handleChange = (e)=>setSearch(e.target.value)
  return (
    <Container py={5} h='100vh' w='full' maxWidth="container.lg">
      <VStack spacing={100}>

        <SearchBar value={search} onChange={handleChange}/>
        <ClientOnly>
          <SimpleGrid columns={3} spacing={10}>
            <GridItem colSpan={1}>  
              <ImageCard
                image={{
                  alt_description: "person in blue jacket sitting on brown wooden chair near brown wooden table during daytime",
                  description: "Remote Working in Iceland Self-Portrait (See a video tour of this co-working space at YouTube.com/TravelingwithKristin)",
                  url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTQ4NDR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzI4MzM0Ng&ixlib=rb-1.2.1&q=85"
                }}
                user={{
                  username: "kristinwilson"
                }}
              />
            </GridItem>
            <GridItem colSpan={1}>  
              <ImageCard
                image={{
                  alt_description: "person in blue jacket sitting on brown wooden chair near brown wooden table during daytime",
                  description: "Remote Working in Iceland Self-Portrait (See a video tour of this co-working space at YouTube.com/TravelingwithKristin)",
                  url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTQ4NDR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzI4MzM0Ng&ixlib=rb-1.2.1&q=85"
                }}
                user={{
                  username: "kristinwilson"
                }}
              />
            </GridItem>
            <GridItem colSpan={1}>  
              <ImageCard
                image={{
                  alt_description: "person in blue jacket sitting on brown wooden chair near brown wooden table during daytime",
                  description: "Remote Working in Iceland Self-Portrait (See a video tour of this co-working space at YouTube.com/TravelingwithKristin)",
                  url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTQ4NDR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzI4MzM0Ng&ixlib=rb-1.2.1&q=85"
                }}
                user={{
                  username: "kristinwilson"
                }}
              />
            </GridItem>
          </SimpleGrid>
        </ClientOnly>
      </VStack>
    </Container>
  )
}
export default Explore