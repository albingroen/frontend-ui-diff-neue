import React, { useState, useMemo, useEffect } from 'react'
import { UserContext, initialUser } from './context/userContext'
import { loggedIn, logout } from './lib/auth'
import { IUser } from './types'
import { request } from './lib'
import Routes from './components/functional/routes'

// Render routes
const App: React.FC = () => {
  const [userIsLoading, setUserIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>(initialUser)

  const userProviderValue = useMemo(() => user, [user])

  useEffect(() => {
    if (loggedIn && !user._id) {
      (async () => {
        setUserIsLoading(true)

        try {
          const res = await request.get('/users')
          setUser(res.data.user)
          setUserIsLoading(false)
        } catch {
          await logout()
          setUserIsLoading(false)
        }
      })()
    }
  }, [user])

  return (
    <UserContext.Provider
      value={{
        user: userProviderValue,
        setUser
      }}
    >
      <Routes userIsLoading={userIsLoading} />
    </UserContext.Provider>
  )
}

export default App
