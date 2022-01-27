import { Heading, HStack, Icon, Link, VStack, useBreakpointValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaTwitter } from 'react-icons/fa';
import LinkCard from "../LinkCard"

function SideBar({ topLinks, bottomLinks }){
  const width = useBreakpointValue({base: '50px', md:'25%'})
  const showText = useBreakpointValue({base: false, md:true})
  const alignItems = useBreakpointValue({base:'center', md:'flex-start'})
  return (
    <VStack h="100vh" w={width} direction="column" bgColor="gray.50" justifyContent="space-between" alignItems="center" py={5} px={5}>
      <VStack w="full" alignItems={alignItems}>
        {topLinks?.map(link => <LinkCard {...link} showText={showText}/>)}
      </VStack>
      <VStack w="full" alignItems={alignItems}>
        {showText && 
          <VStack  alignItems='flex-start'>
            {bottomLinks?.map(link => <Link key={`link${link.url}${link.text}`} href={link.url} as={NextLink}>{link.text}</Link>)}
          </VStack>}

        {showText && <HStack pt={4} justifyContent="space-between" w="full" alignItems="center">
          <Heading size="lg" color="gray.600">Curated</Heading>
          <Icon as={FaTwitter} w={5} h={5} color="gray.300"/>
        </HStack>}
        {!showText && <Icon as={FaTwitter} w={5} h={5} color="gray.300"/>}
      </VStack>
      
    </VStack>
  )

}
export default SideBar