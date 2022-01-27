import { Button, HStack, Text, Icon } from "@chakra-ui/react"
import  NextLink from "next/link"

function LinkCard({text, url, icon : LinkIcon, selected}){
  return (
    <NextLink href={url}>
      <Button w="full" bgColor={!selected && "inherit"} color="gray.500" borderRadius="1" justifyContent="flex-start">
        <HStack spacing={2}>
          {LinkIcon && <Icon data-testid={`link-card-icon_${text}_${url}`} as={LinkIcon}/> }
          <Text>{text}</Text>
        </HStack>
      </Button>
    </NextLink>
  )
}

export default LinkCard