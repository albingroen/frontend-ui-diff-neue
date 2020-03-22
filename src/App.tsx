import React, { useState, useMemo, useEffect } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom'
import { UserContext, initialUser } from './context/userContext'

// Import components
import { Container } from './components'
import { Signup, Dashboard, Login, Auth } from './views'
import { loggedIn, logout } from './lib/auth'
import { IUser } from './types'
import { request } from './lib'

// Render routes
function App () {
  const [isUserLoading, setIsUserLoading] = useState<boolean>()
  const [user, setUser] = useState<IUser>(initialUser)

  const userProviderValue = useMemo(() => user, [user])

  useEffect(() => {
    if (loggedIn && !user._id) {
      (async () => {
        setIsUserLoading(true)

        try {
          const res = await request.get('/users')
          setUser(res.data.user)
          setIsUserLoading(false)
        } catch {
          await logout()
          setIsUserLoading(false)
        }
      })()
    }
  }, [user])

  return (
    <UserContext.Provider
      value={{
        user: userProviderValue,
        setUser: (newUser: IUser) => {
          console.log('setUser()')
          setUser(newUser)
        }
      }}
    >
      <BrowserRouter>
        <Switch>
          <Container loading={isUserLoading}>
            {/* Main route */}
            <Route path="/" component={loggedIn ? Dashboard : () => <Redirect to="/login" />} exact />

            {/* Auth routes */}
            <Route path="/auth" component={loggedIn ? () => <Redirect to="/" /> : Auth} exact />
            <Route path="/signup" component={loggedIn ? () => <Redirect to="/" /> : Signup} exact />
            <Route path="/login" component={loggedIn ? () => <Redirect to="/" /> : Login} exact />

            {/* Private routes */}
            <PrivateRoute path="/members" component={Dashboard} exact />
          </Container>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => (loggedIn ? (
    React.createElement(component, props)
  ) : (
    <Redirect to={{ pathname: '/' }} />
  ))
  return <Route {...rest} render={routeComponent} />
}

export default App
