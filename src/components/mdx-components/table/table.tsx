import * as React from 'react'
import { chakra } from '@chakra-ui/react'

export function Table(props: any) {
  return (
    <chakra.div overflowX="auto">
      <chakra.table
        textAlign="left"
        mb="16px"
        width="full"
        borderColor="primary.500"
        borderWidth="1px"
        _dark={{
          borderColor: 'primary.700',
        }}
        {...props}
      />
    </chakra.div>
  )
}
