import * as React from 'react'
import { Box } from '@primer/components'

interface IDividerProps {
  flush?: boolean
}

export const Divider: React.FC<IDividerProps> = ({ flush }) => (
  <Box my={flush ? 0 : 4}>
    <hr/>
  </Box>
)
