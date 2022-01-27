import { Box, Flex } from "@chakra-ui/react";
import SideBar from '../SideBar'

function Layout({children}) {
  return (
    <Flex overflow="hidden"  w="full" h="full">
      <SideBar/>
      <Box h="full" w="full"  overflowY="auto">
        {children}
      </Box>
    </Flex>
  )
}

export default Layout