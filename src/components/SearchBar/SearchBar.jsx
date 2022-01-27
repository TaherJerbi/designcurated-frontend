import { 
  Button, 
  FormControl, 
  HStack, 
  Icon, 
  Input, 
  InputGroup,
  InputLeftElement,
  Text,
  InputRightElement,
  Collapse,
  Kbd,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
  SimpleGrid,
  GridItem,
  FormLabel,
  Select
} from "@chakra-ui/react"
import { useState } from "react";
import { GiSettingsKnobs } from 'react-icons/gi'

function SearchBar({state, dispatch, onSlashClick}){
  const [isOpen , setIsOpen ] = useState(false); 
  const handleSearchChange = (e)=>dispatch({type:'field', field:'search' , value: e.target.value})
  const handleSelectChange = (e)=>dispatch({type:'field', field:'orientation' , value: e.target.value})
  const handleNumberChange = (valString)=>dispatch({type:'field', field:'page_number' , value: +valString})
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement p={1} w='5rem'>
          <Button color="gray.500" onClick={() => setIsOpen(o => !o)} borderRadius={3} boxShadow='sm' bgColor='white' size='sm'>
            <HStack>
              <Icon as={GiSettingsKnobs}/>
              <Text>Filter</Text>
            </HStack>
          </Button>
        </InputLeftElement>
        <Input 
          onKeyPress={e=> {
            if (e.key === 'Enter') {
              onSlashClick(e);
            }
          }}
          variant='filled' 
          onChange={handleSearchChange}
          value={state.search}
          placeholder='Search Knowledge'  
          textAlign='center' />
        <InputRightElement>
          <Button>
            <Kbd color="gray.500" px={3} py={2} onClick={onSlashClick} borderRadius={3} alignItems='center' bgColor='white' size='sm'>/</Kbd>
          </Button>
        </InputRightElement>
      </InputGroup>
      <Collapse in={isOpen} animateOpacity>
        <SimpleGrid p={2} columns={[1,3]} spacing={4}>
          
          <GridItem colSpan={1}>
            <FormLabel>Page number</FormLabel>
            <NumberInput value={state.page_number} min={1} onChange={handleNumberChange}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel>Orientation</FormLabel>
            <Select value={state.orientation} onChange={handleSelectChange}>
              <option value="landscape">Landscape</option>
              {/* TODO : Error forbidden for other orientations */}
              {/* <option value="portrait">Portrait</option>
              <option value="squarish">squarish</option> */}
            </Select>
          </GridItem>
        </SimpleGrid>
      </Collapse>
    </FormControl>
  )
}
export default SearchBar