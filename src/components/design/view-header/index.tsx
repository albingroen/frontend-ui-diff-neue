import * as React from 'react'
import { Divider } from '../..'

interface IViewHeader {
  children: React.ReactNode;
  noDivider?: boolean;
}

export const ViewHeader: React.FC<IViewHeader> = ({ children, noDivider }) => {
  return (
    <div>
      <div>{children}</div>
      {!noDivider && <Divider />}
    </div>
  )
}
