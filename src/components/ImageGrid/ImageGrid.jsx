import { GridItem, SimpleGrid } from "@chakra-ui/react"
import ImageCard from "../ImageCard"

function ImageGrid({ photos }){
  return (
    <SimpleGrid columns={3} spacing={10}>
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