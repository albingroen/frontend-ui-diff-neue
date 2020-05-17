import { ITeam, TeamMemberRole } from '../types'
import { request } from '.'

export const getTeamIds = (teams?: ITeam[]) => {
  if (!teams || !teams.length) {
    return []
  }

  const teamIds = teams.map((team: ITeam) => team._id) || []

  return teamIds
}

export const getTeamsById = (teams?: ITeam[]) => {
  const teamsById: { [key: string]: ITeam } = {}

  if (teams) {
    teams.forEach((team: ITeam) => {
      teamsById[team._id] = team
    })
  }

  return teamsById
}

export const patchTeam = async (
  teamId: string,
  values: { [key: string]: any }
) => {
  const res = await request.patch(`/teams/${teamId}`, values)
  return res.data.team
}

export const patchTeamMember = async (
  teamId: string,
  userId: string,
  values: { [key: string]: any }
) => {
  const res = await request.patch(`/teams/${teamId}/update-member`, {
    userId,
    newRole: values.role
  })
  return res.data.team
}

export const deleteTeamMember = async (teamId: string, userId: string) => {
  const res = await request.patch(`/teams/${teamId}/delete-member`, { userId })
  return res.data.team
}

export const deleteTeam = async (teamId: string) => {
  const res = await request.delete(`/teams/${teamId}`)
  return res.data.isTeamDeleted
}

export const inviteTeamMember = async (
  teamId: string,
  values: { email: string; role: TeamMemberRole | string }
) => {
  const res = await request.post('/invitations', { ...values, teamId })
  return res.data.invitation
}

export const deleteTeamMemberInvitation = async (invitationId: string) => {
  const res = await request.delete(`/invitations/${invitationId}`)
  return res.data.isTeamMemberInvitationDeleted
}

export const createTeam = async (values: { [key: string]: any }) => {
  const res = await request.post('/teams', values)
  return res.data.team
}

export const teamMemberRoles: { [key: string]: TeamMemberRole } = {
  ADMIN: 'admin',
  USER: 'user'
}
