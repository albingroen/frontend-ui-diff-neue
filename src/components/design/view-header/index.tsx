import * as React from 'react'
import { Box } from '@primer/components'
import { Divider } from '../..'

interface IViewHeader {
  children: React.ReactNode
}

export const ViewHeader: React.FC<IViewHeader> = ({ children }) => {
  return (
    <Box>
      <Box>
        {children}
      </Box>
      <Divider />
    </Box>
  )
}
