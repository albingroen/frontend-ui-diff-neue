import { ITeam } from '../types'
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

export const teamMemberRoles = {
  ADMIN: 'admin',
  USER: 'user'
}
