import { Button, HStack, Text, Icon } from "@chakra-ui/react"
import  NextLink from "next/link"

function LinkCard({text, url, icon : LinkIcon, selected, showText}){
  return (
    <NextLink href={url}>
      <Button w="full" bgColor={!selected && "inherit"} color="gray.500" borderRadius="1" justifyContent={showText ? "flex-start" : 'center'}>
        {showText && <HStack spacing={2}>
          {LinkIcon && <Icon data-testid={`link-card-icon_${text}_${url}`} as={LinkIcon}/> }
          <Text>{text}</Text>
        </HStack>}
        {!showText && <Icon data-testid={`link-card-icon_${text}_${url}`} as={LinkIcon}/>}
      </Button>
    </NextLink>
  )
}

export default LinkCard