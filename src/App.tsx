import React, { useState, useMemo, useEffect } from 'react'
import {
  getProjects,
  getProjectsById,
  getProjectIds,
  createProject
} from './lib/projects'
import { UserContext, initialUser } from './context/userContext'
import { TeamsContext } from './context/teamsContext'
import { ProjectsContext } from './context/projectsContext'
import { loggedIn, logout } from './lib/auth'
import { IUser, IProject, ITeam } from './types'
import Routes from './components/functional/routes'
import { getUser } from './lib/user'
import { getTeamIds, getTeamsById } from './lib/teams'

const initialLoadingState = {
  user: false,
  projects: false
}

// Render routes
const App: React.FC = () => {
  // State management
  const [teams, setTeams] = useState<ITeam[]>()
  const [user, setUser] = useState<IUser>(initialUser)
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(initialLoadingState)

  // Frequently used variables
  const projectIds = getProjectIds(projects)
  const projectsById = getProjectsById(projects)
  const teamIds = getTeamIds(teams)
  const teamsById = getTeamsById(teams)

  // Fetch user and projects on app mount
  useEffect(() => {
    if (loggedIn && !user._id) {
      (async () => {
        // Set loading states to true
        setLoading({ user: true, projects: true })

        try {
          // Fetch current user if authed
          const newUser = await getUser()
          setTeams(newUser?.teams)
          setUser(newUser)

          // Disable user loading state
          setLoading({ user: false, projects: true })

          // Fetch and set projects belonging to user
          const newProjects = await getProjects()
          setProjects(newProjects)

          // Disable projects loading state
          setLoading(initialLoadingState)
        } catch {
          // Log out and disable all loading states
          await logout()
          setLoading(initialLoadingState)
        }
      })()
    }
  }, [user])

  // Values using memo hooks to only update
  // when depedency values are changing.
  const userProviderValue = useMemo(() => user, [user])
  const teamsProviderValue = useMemo(
    () => ({
      teams: teamIds,
      teamsById
    }),
    [teamIds, teamsById]
  )
  const projectsProviderValue = useMemo(
    () => ({
      projectsById,
      projects: projectIds,
      createProject: async (owner: string, name: string) => {
        // Create project
        const project = await createProject(owner, name)

        // Set projects
        setProjects([...projects, project])

        // Return project
        return project
      }
    }),
    [projectIds, projectsById, projects]
  )

  return (
    <UserContext.Provider value={{ user: userProviderValue, setUser }}>
      <TeamsContext.Provider value={teamsProviderValue}>
        <ProjectsContext.Provider value={projectsProviderValue}>
          <Routes userIsLoading={loading.user || loading.projects} />
        </ProjectsContext.Provider>
      </TeamsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
