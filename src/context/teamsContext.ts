import { createContext } from 'react'
import { ITeam, TeamMemberRole, ITeamInvitation } from '../types'

export type ITeamsContext = {
  teamsById: { [id: string]: ITeam };
  teams: string[];
  patchTeam: (
    teamId: string,
    values: { [key: string]: any }
  ) => Promise<ITeam> | void;
  patchTeamMember: (
    teamId: string,
    userId: string,
    values: { [key: string]: any }
  ) => Promise<ITeam> | void;
  deleteTeamMember: (teamId: string, userId: string) => Promise<ITeam> | void;
  deleteTeam: (teamId: string) => Promise<boolean> | void;
  inviteTeamMember: (
    teamId: string,
    values: { email: string; role: TeamMemberRole | string }
  ) => Promise<ITeamInvitation> | void;
  deleteTeamMemberInvitation: (invitationId: string) => Promise<boolean> | void;
  createTeam: (name: string) => Promise<ITeam> | void;
};

export const TeamsContext = createContext<ITeamsContext>({
  teamsById: {},
  teams: [],
  patchTeam: () => {},
  patchTeamMember: () => {},
  deleteTeamMember: () => {},
  deleteTeam: () => {},
  inviteTeamMember: () => {},
  deleteTeamMemberInvitation: () => {},
  createTeam: () => {}
})
