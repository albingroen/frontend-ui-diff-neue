import { createContext } from 'react'
import { IProject } from '../types'

export type IProjectsContext = {
  projectsById: { [id: string]: IProject };
  projects: string[];
  createProject: (owner: string, name: string) => Promise<IProject> | void;
  patchProject: (
    projectId: string,
    values: { [key: string]: any }
  ) => Promise<IProject> | void;
  patchProjectApiKey: (projectId: string) => Promise<IProject> | void;
  deleteProject: (projectId: string) => Promise<boolean> | void;
};

export const ProjectsContext = createContext<IProjectsContext>({
  projectsById: {},
  projects: [],
  createProject: () => {},
  patchProject: () => {},
  patchProjectApiKey: () => {},
  deleteProject: () => {}
})
