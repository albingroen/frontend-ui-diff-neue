import { patchTeam, patchTeamMember, deleteTeamMember } from '../lib/teams'
import { ITeam } from '../types'

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
  }
})
