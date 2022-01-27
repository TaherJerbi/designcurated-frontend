import { GridItem, SimpleGrid } from "@chakra-ui/react";
import SideBar from '../SideBar'

function Layout({children}) {
  return (
    <SimpleGrid columns={20}  w="full" h="full">
      <GridItem h="full" colSpan={[3,4]} backgroundColor="gray.50" border="1px" borderColor="gray.200">
        <SideBar/>
      </GridItem>
      <GridItem h="full" colSpan={[17,16]}>
        {children}
      </GridItem>
    </SimpleGrid>
  )
}

export default Layout