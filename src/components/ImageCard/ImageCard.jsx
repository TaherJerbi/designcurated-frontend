import { Box, Heading, Text, VStack, Link, useBreakpointValue } from "@chakra-ui/react"
import Image from "next/image"
import LinesEllipsis from "react-lines-ellipsis"

function ImageCard({ image, user}){
  const { url, description, id, alt_description : alt } = image
  const { username } = user
  const height = useBreakpointValue({base: '300px', md: '180px'})
  return (
    <VStack alignItems="flex-start">
      <Box position='relative' w='full' h={height} overflow="hidden" borderRadius={10}>
        <Link target='_blank' href={`https://unsplash.com/photos/${id}`}><Image loading="eager" layout="fill" objectFit="cover" src={url} alt={alt}/></Link>
      </Box>
      <Link target='_blank' href={`https://unsplash.com/@${username}`}><Text fontWeight="semibold" color="gray.500">@{username}</Text></Link>
      <Heading size='sm'>
        {description && <LinesEllipsis 
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />}
      </Heading>
    </VStack>)
     
}

export default ImageCard