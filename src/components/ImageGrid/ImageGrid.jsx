import { GridItem, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import ImageCard from "../ImageCard"

function ImageGrid({ photos }){
  const columns = useBreakpointValue({base: 1, md: 2, lg: 3})
  const py = useBreakpointValue({base: 5, md: 10})
  return (
    <SimpleGrid columns={columns} spacing={10} py={py}>
      {photos && photos.map(photo => (
        <GridItem key={photo.image.id} colSpan={1}>  
          <ImageCard
            image={photo.image}
            user={photo.user}
          />
        </GridItem>
      ))}
    </SimpleGrid>
  )
}
export default ImageGrid