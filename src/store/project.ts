import {
  createProject,
  patchProject,
  patchProjectApiKey,
  deleteProject
} from '../lib/projects'
import { IProject } from '../types'

export default (
  projectIds: string[],
  projectsById: { [key: string]: IProject },
  projects: IProject[],
  setProjects: (projects: IProject[]) => void
) => ({
  projectsById,
  projects: projectIds,
  createProject: async (owner: string, name: string) => {
    // Create project
    const project = await createProject(owner, name)

    // Set projects
    setProjects([...projects, project])

    // Return project
    return project
  },
  patchProject: async (projectId: string, values: { [key: string]: any }) => {
    // Patch project
    const patchedProject = await patchProject(projectId, values)

    // Find previous project
    const oldProject = projects.find((p) => p?._id === projectId)

    if (oldProject) {
      // Set new project
      const newProjects = [...projects]
      newProjects[projects.indexOf(oldProject)] = patchedProject
      setProjects(newProjects)

      // Return project
      return patchedProject
    }
  },
  patchProjectApiKey: async (projectId: string) => {
    // Patch project
    const patchedProject = await patchProjectApiKey(projectId)

    // Find previous project
    const oldProject = projects.find((p) => p?._id === projectId)

    if (oldProject) {
      // Set new project
      const newProjects = [...projects]
      newProjects[projects.indexOf(oldProject)] = patchedProject
      setProjects(newProjects)

      // Return project
      return patchedProject
    }
  },
  deleteProject: async (projectId: string) => {
    // Patch project
    const isProjectDeleted = await deleteProject(projectId)

    // Find previous project
    const oldProject = projects.find((p) => p?._id === projectId)

    // Set new projects
    if (isProjectDeleted && oldProject) {
      const newProjects = [...projects]
      newProjects.splice(projects.indexOf(oldProject), 1)
      setProjects(newProjects)

      return true
    }

    return false
  }
})
