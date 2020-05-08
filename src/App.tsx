import * as React from 'react'
import {
  getProjects,
  getProjectsById,
  getProjectIds,
  createProject,
  patchProject,
  patchProjectApiKey,
  deleteProject
} from './lib/projects'
import { UserContext, initialUser } from './context/userContext'
import { TeamsContext } from './context/teamsContext'
import { ProjectsContext } from './context/projectsContext'
import { loggedIn, logout } from './lib/auth'
import { IUser, IProject, ITeam } from './types'
import { getTeamIds, getTeamsById, patchTeam } from './lib/teams'
import { getUser } from './lib/user'
import Routes from './components/functional/routes'

const initialLoadingState = {
  user: false,
  projects: false
}

// Render routes
const App: React.FC = () => {
  // State management
  const [teams, setTeams] = React.useState<ITeam[]>([])
  const [user, setUser] = React.useState<IUser>(initialUser)
  const [projects, setProjects] = React.useState<IProject[]>([])
  const [loading, setLoading] = React.useState(initialLoadingState)

  // Frequently used variables
  const projectIds = getProjectIds(projects)
  const projectsById = getProjectsById(projects)
  const teamIds = getTeamIds(teams)
  const teamsById = getTeamsById(teams)

  // Fetch user and projects on app mount
  React.useEffect(() => {
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
          alert('logout')
          await logout()
          setLoading(initialLoadingState)
        }
      })()
    }
  }, [user])

  // Values using memo hooks to only update
  // when depedency values are changing.
  const userProviderValue = React.useMemo(() => user, [user])
  const teamsProviderValue = React.useMemo(
    () => ({
      teams: teamIds,
      teamsById,
      patchTeam: async (teamId: string, values: { [key: string]: any }) => {
        // Patch project
        const patchedTeam = await patchTeam(teamId, values)

        // Find previous project
        const oldTeam = teams.find((t) => t?._id === teamId)

        if (oldTeam) {
          // Set new project
          const newTeams = [...teams]
          newTeams[teams.indexOf(oldTeam)] = patchedTeam
          setTeams(newTeams)

          // Return project
          return patchedTeam
        }
      }
    }),
    [teamIds, teamsById, teams]
  )
  const projectsProviderValue = React.useMemo(
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
      },
      patchProject: async (
        projectId: string,
        values: { [key: string]: any }
      ) => {
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
