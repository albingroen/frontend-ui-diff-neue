import React, { useState, useMemo, useEffect } from 'react'
import { getProjects, getProjectsById, getProjectIds } from './lib/projects'
import { UserContext, initialUser } from './context/userContext'
import { ProjectsContext } from './context/projectsContext'
import { loggedIn, logout } from './lib/auth'
import { IUser, IProject } from './types'
import Routes from './components/functional/routes'
import { getUser } from './lib/user'

const initialLoadingState = {
  user: false,
  projects: false
}

// Render routes
const App: React.FC = () => {
  const [user, setUser] = useState<IUser>(initialUser)
  const [projects, setProjects] = useState<IProject[]>()
  const [loading, setLoading] = useState(initialLoadingState)

  const projectIds = getProjectIds(projects)
  const projectsById = getProjectsById(projects)

  useEffect(() => {
    if (loggedIn && !user._id) {
      (async () => {
        // Set loading states to true
        setLoading({ user: true, projects: true })

        try {
          // Fetch current user if authed
          const newUser = await getUser()
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

  const userProviderValue = useMemo(() => user, [user])
  const projectsProviderValue = useMemo(
    () => ({ projects: projectIds, projectsById }),
    [projectIds, projectsById]
  )

  return (
    <UserContext.Provider value={{ user: userProviderValue, setUser }}>
      <ProjectsContext.Provider value={projectsProviderValue}>
        <Routes userIsLoading={loading.user || loading.projects} />
      </ProjectsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
