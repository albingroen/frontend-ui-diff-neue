import { createContext } from 'react'
import { IProject } from '../types'

export type IProjectsContext = {
  projectsById: { [id: string]: IProject };
  projects: string[];
};

export const ProjectsContext = createContext<IProjectsContext>({
  projectsById: {},
  projects: []
})
