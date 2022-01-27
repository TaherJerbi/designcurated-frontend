import { Container, VStack, Box } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import ClientOnly from "../ClientOnly";
import SearchBar from "../SearchBar";
import ImageGrid from "../ImageGrid";


const reducer = (state,action)=> {
  switch(action.type){
  case 'field':{
    return {
      ...state,
      [action.field]: action.value
    }
  }
  default:{
    return state;
  } 
  }
}
const initState = {
  page_number : 1,
  search: '',
  orientation: 'landscape'
}
function Explore(){
  const [internalState,dispatch] = useReducer(reducer,initState);
  const [state,setState] = useState(internalState)
  
  const handleSlashClick = () => setState(internalState)
  return (
    <Container py={5} h='100vh' w='full' maxWidth="container.lg">
      <VStack spacing={50}>
        <SearchBar state={internalState} dispatch={dispatch} onSlashClick={handleSlashClick}/>
        <Box w="full">
          <ClientOnly>
            <VStack>
              <ImageGrid page_number={state.page_number} orientation={state.orientation} search={state.search} />
            </VStack>
          </ClientOnly>
        </Box>
      </VStack>
    </Container>
  )
}
export default Explore