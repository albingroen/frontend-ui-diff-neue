import { createContext } from 'react'
import { IProject } from '../types'

export type IProjectsContext = {
  projectsById: { [id: string]: IProject };
  projects: string[];
  createProject: (owner: string, name: string) => Promise<IProject> | void;
};

export const ProjectsContext = createContext<IProjectsContext>({
  projectsById: {},
  projects: [],
  createProject: () => {}
})
