import { Heading, HStack, Icon, Link, VStack, useBreakpointValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaTwitter } from 'react-icons/fa';
import ClientOnly from "../ClientOnly";
import LinkCard from "../LinkCard"

function SideBar({ topLinks, bottomLinks }){
  const showText = useBreakpointValue({base: false, md:true})
  const alignItems = useBreakpointValue({base: 'center',md:'flex-start'})
  
  return (
    <VStack h="100vh" w={{base: '100px', md:'300px', lg:'400px'}} direction="column" bgColor="gray.50" justifyContent="space-between" alignItems="center" py={5} px={5}>
      <VStack w="full" alignItems={alignItems}>
        {topLinks?.map(link => <LinkCard key={`${link.url+link.text}topLink`} {...link}/>)}
      </VStack>
      <VStack w="full" alignItems={alignItems}>
        {/* TODO : bug fix -- links appear horizontally in SSR */}
        <ClientOnly>
          {showText && <VStack  alignItems='flex-start'>
            {bottomLinks?.map(link => <Link key={`${link.url}${link.text}bottomLink`} href={link.url} as={NextLink}>{link.text}</Link>)}
          </VStack>}
        </ClientOnly>

        <HStack pt={4} justifyContent={{base:'center', md:'space-between'}} w="full" alignItems="center">
          {showText && <Heading size="lg" color="gray.600">Curated</Heading>}
          <Icon as={FaTwitter} w={4} h={4}  color="gray.300"/>
        </HStack>
        
      </VStack>
      
    </VStack>
  )

}
export default SideBar