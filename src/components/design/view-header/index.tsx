import * as React from 'react'
import { Divider } from '../..'

interface IViewHeader {
  children: React.ReactNode;
}

export const ViewHeader: React.FC<IViewHeader> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Divider />
    </div>
  )
}
