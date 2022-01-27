import { 
  Button, 
  FormControl, 
  HStack, 
  Icon, 
  Input, 
  InputGroup,
  InputLeftElement,
  Text,
  InputRightElement
} from "@chakra-ui/react"
import { GiSettingsKnobs } from 'react-icons/gi'

function SearchBar({value, onChange, onFilterClick, onSlashClick}){
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement p={1} w='5rem'>
          <Button onClick={onFilterClick} borderRadius={3} boxShadow='sm' bgColor='white' size='sm'>
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
          onChange={onChange}
          value={value}
          placeholder='Search Knowledge'  
          textAlign='center' />
        <InputRightElement>
          <Button onClick={onSlashClick} borderRadius={3} boxShadow='sm' alignItems='center' bgColor='white' size='sm'>
            <Text>/</Text>
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}
export default SearchBar