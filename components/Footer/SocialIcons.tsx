import React from 'react'
import { chakra, Tooltip, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'

interface SocialIconsProps {
  href: string
  label: string
  children: React.ReactNode
}

const SocialIcons = ({ children, href, label }: SocialIconsProps): JSX.Element => {
  return (
    <Tooltip label={label}>
      <chakra.button
        bg={useColorModeValue(`gray.800`, `gray.300`)}
        rounded='full'
        p={10}
        my={8}
        cursor='pointer'
        as='a'
        href={href}
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
        transition='background 0.3s ease'
        _hover={{
          bg: useColorModeValue(`blackAlpha.200`, `whiteAlpha.200`),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Tooltip>
  )
}

export default SocialIcons