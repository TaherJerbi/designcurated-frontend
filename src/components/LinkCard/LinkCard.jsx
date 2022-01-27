import { Button, HStack, Text } from "@chakra-ui/react"
import  NextLink from "next/link"

function LinkCard({text, url, icon : Icon, selected}){
  return (
    <NextLink href={url}>
      <Button w="full" bgColor={!selected && "inherit"} color="gray.500" borderRadius="1" justifyContent="flex-start">
        <HStack spacing={2}>
          {Icon && <Icon />}
          <Text>{text}</Text>
        </HStack>
      </Button>
    </NextLink>
  )
}

export default LinkCard