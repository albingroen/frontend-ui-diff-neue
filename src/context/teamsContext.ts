import { createContext } from 'react'
import { ITeam } from '../types'

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
};

export const TeamsContext = createContext<ITeamsContext>({
  teamsById: {},
  teams: [],
  patchTeam: () => {},
  patchTeamMember: () => {}
})
