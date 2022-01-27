import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import LinesEllipsis from "react-lines-ellipsis"

function ImageCard({ image, user}){
  const { url, description, alt_description : alt } = image
  const { username } = user
  return (
    <VStack alignItems="flex-start">
      <Box position='relative' w='full' h='150px' overflow="hidden" borderRadius={10}>
        <Image layout="fill" objectFit="cover" src={url} alt={alt}/>
      </Box>
      <Text fontWeight="semibold" color="gray.500">{username}</Text>
      <Heading size='sm'>
        <LinesEllipsis 
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Heading>
    </VStack>)
     
}

export default ImageCard