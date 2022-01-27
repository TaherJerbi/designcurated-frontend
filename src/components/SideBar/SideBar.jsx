import { Heading, HStack, Icon, Link, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaTwitter } from 'react-icons/fa';
import LinkCard from "../LinkCard"

function SideBar({ topLinks, bottomLinks }){
  return (
    <VStack h="full" w="full" direction="column" justifyContent="space-between" alignItems="center" py={5} px={5}>
      <VStack w="full" alignItems='flex-start'>
        {topLinks?.map(link => <LinkCard {...link}/>)}
      </VStack>
      <VStack w="full" alignItems='flex-start'>
        <VStack  alignItems='flex-start'>
          {bottomLinks?.map(link => <Link key={`link${link.url}${link.text}`} href={link.url} as={NextLink}>{link.text}</Link>)}
        </VStack>

        <HStack pt={4} justifyContent="space-between" w="full" alignItems="center">
          <Heading size="lg" color="gray.600">Curated</Heading>
          <Icon as={FaTwitter} w={5} h={5} color="gray.300"/>
        </HStack>
      </VStack>
      
    </VStack>
  )

}
export default SideBar