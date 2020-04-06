import { ITeam } from '../types'

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
