import {
  patchTeam,
  patchTeamMember,
  deleteTeamMember,
  deleteTeam,
  inviteTeamMember
} from '../lib/teams'
import { ITeam, TeamMemberRole } from '../types'

export default (
  teamIds: string[],
  teamsById: { [key: string]: ITeam },
  teams: ITeam[],
  setTeams: (teams: ITeam[]) => void
) => ({
  teams: teamIds,
  teamsById,
  patchTeam: async (teamId: string, values: { [key: string]: any }) => {
    // Patch team
    const patchedTeam = await patchTeam(teamId, values)

    // Find previous team
    const oldTeam = teams.find((t) => t?._id === teamId)

    if (oldTeam) {
      // Set new team
      const newTeams = [...teams]
      newTeams[teams.indexOf(oldTeam)] = patchedTeam
      setTeams(newTeams)

      // Return team
      return patchedTeam
    }
  },
  patchTeamMember: async (
    teamId: string,
    userId: string,
    values: { [key: string]: any }
  ) => {
    // Patch team
    const patchedTeam = await patchTeamMember(teamId, userId, values)

    // Find previous team
    const oldTeam = teams.find((t) => t?._id === teamId)

    if (oldTeam) {
      // Set new team
      const newTeams = [...teams]
      newTeams[teams.indexOf(oldTeam)] = patchedTeam
      setTeams(newTeams)

      // Return team
      return patchedTeam
    }
  },
  deleteTeamMember: async (teamId: string, userId: string) => {
    // Patch team
    const patchedTeam = await deleteTeamMember(teamId, userId)

    // Find previous team
    const oldTeam = teams.find((t) => t?._id === teamId)

    if (oldTeam) {
      // Set new team
      const newTeams = [...teams]
      newTeams[teams.indexOf(oldTeam)] = patchedTeam
      setTeams(newTeams)

      // Return team
      return patchedTeam
    }
  },
  deleteTeam: async (teamId: string) => {
    // Delete team
    const isTeamDeleted = await deleteTeam(teamId)

    // Find previous team
    const oldTeam = teams.find((t) => t?._id === teamId)

    // Set new teams
    if (isTeamDeleted && oldTeam) {
      const newTeams = [...teams]
      newTeams.splice(teams.indexOf(oldTeam), 1)
      setTeams(newTeams)

      return true
    }

    return false
  },
  inviteTeamMember: async (
    teamId: string,
    values: { email: string; role: TeamMemberRole | string }
  ) => {
    // Patch team
    const invitation = await inviteTeamMember(teamId, values)
    return invitation
  }
})
