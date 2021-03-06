import * as React from 'react'
import { getProjects, getProjectsById, getProjectIds } from './lib/projects'
import { UserContext, initialUser } from './context/userContext'
import { TeamsContext } from './context/teamsContext'
import { ProjectsContext } from './context/projectsContext'
import { loggedIn, logout } from './lib/auth'
import { IUser, IProject, ITeam } from './types'
import { getTeamIds, getTeamsById } from './lib/teams'
import { getUser } from './lib/user'
import Routes from './components/functional/routes'
import teamStore from './store/team'
import projectStore from './store/project'
import userStore from './store/user'

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
  const userProviderValue = React.useMemo(() => userStore(user, setUser), [
    user
  ])
  const teamsProviderValue = React.useMemo(
    () => teamStore(teamIds, teamsById, teams, setTeams),
    [teamIds, teamsById, teams]
  )
  const projectsProviderValue = React.useMemo(
    () => projectStore(projectIds, projectsById, projects, setProjects),
    [projectIds, projectsById, projects]
  )

  return (
    <UserContext.Provider value={userProviderValue}>
      <TeamsContext.Provider value={teamsProviderValue}>
        <ProjectsContext.Provider value={projectsProviderValue}>
          <Routes userIsLoading={loading.user || loading.projects} />
        </ProjectsContext.Provider>
      </TeamsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
