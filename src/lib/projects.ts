import { request } from '.'
import { IProject } from '../types'

export const getProjects = async () => {
  const projectsRes = await request.get('/projects')

  return projectsRes?.data?.projects
}

export const getProjectIds = (projects?: IProject[]) => {
  if (!projects || !projects.length) {
    return []
  }

  const projectIds = projects.map((project: IProject) => project._id) || []

  return projectIds
}

export const getProjectsById = (projects?: IProject[]) => {
  const projectsById: { [key: string]: IProject } = {}

  if (projects) {
    projects.forEach((project: IProject) => {
      projectsById[project._id] = project
    })
  }

  return projectsById
}

export const createProject = async (owner: string, name: string) => {
  const res = await request.post('/projects', { name, team: owner })
  return res.data.project
}
