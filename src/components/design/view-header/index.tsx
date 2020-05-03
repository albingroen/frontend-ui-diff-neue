import * as React from 'react'
import { Divider } from '../..'

interface IViewHeader {
  children: React.ReactNode;
  withoutDivider?: boolean;
}

export const ViewHeader: React.FC<IViewHeader> = ({
  children,
  withoutDivider
}) => {
  return (
    <div>
      <div>{children}</div>
      {!withoutDivider && <Divider />}
    </div>
  )
}
