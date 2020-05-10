import * as React from 'react'
import { Label } from '@primer/components'
import { teamMemberRoles } from '../../../lib/teams'
import { TeamMemberRole } from '../../../types'

interface IRoleLabelProps {
  role: TeamMemberRole;
}

export const RoleLabel: React.FC<IRoleLabelProps> = ({ role }) => (
  <Label bg={role === teamMemberRoles.ADMIN ? 'blue.4' : 'gray.3'}>
    {role}
  </Label>
)
