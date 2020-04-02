import { createContext } from 'react'
import { ITeam } from '../types'

export type ITeamsContext = {
  teamsById: { [id: string]: ITeam };
  teams: string[];
};

export const TeamsContext = createContext<ITeamsContext>({
  teamsById: {},
  teams: []
})
