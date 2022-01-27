import { Box, Flex } from "@chakra-ui/react";
import SideBar from '../SideBar'

function Layout({children}) {
  return (
    <Flex columns={20} overflow="hidden"  w="full" h="full">
      <SideBar/>
      <Box h="full" w="full" colSpan={[17,16]} overflowY="auto">
        {children}
      </Box>
    </Flex>
  )
}

export default Layout