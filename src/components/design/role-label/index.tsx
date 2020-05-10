import * as React from 'react'
import { Label } from '@primer/components'
import { teamMemberRoles } from '../../../lib/teams'

interface IRoleLabelProps {
  role: 'admin' | 'user';
}

export const RoleLabel: React.FC<IRoleLabelProps> = ({ role }) => (
  <Label bg={role === teamMemberRoles.ADMIN ? 'blue.4' : 'gray.3'}>
    {role}
  </Label>
)
