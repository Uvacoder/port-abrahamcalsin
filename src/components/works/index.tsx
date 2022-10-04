import * as React from 'react'
import { Box } from '@chakra-ui/react'

interface WorksProps {
  children: React.ReactNode
}

export function Works(props: WorksProps) {
  const { children } = props

  return (
    <Box position="relative" my={{ base: '44px', sm: '76px' }} className="timeline">
      {children}
    </Box>
  )
}
