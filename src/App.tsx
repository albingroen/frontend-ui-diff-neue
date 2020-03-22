import React, { useState, useMemo, useEffect } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom'
import { UserContext, initialUser } from './context/userContext'

// Import components
import { Container } from './components'
import { Signup, Dashboard, Login, Auth, EmailConfirmation } from './views'
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
          {/* Auth routes */}
          <PublicRoute path="/auth" component={Auth} exact />
          <PublicRoute path="/signup" component={Signup} exact />
          <PublicRoute path="/login" component={Login} exact />
          <PublicRoute path="/confirmation/:userId" component={EmailConfirmation} exact />

          <Container loading={isUserLoading}>
            {/* Main route */}
            <Route path="/" component={loggedIn ? Dashboard : () => <Redirect to="/login" />} exact />

            {/* Private routes */}
            <PrivateRoute path="/members" component={Dashboard} exact />
          </Container>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

const PublicRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => (loggedIn ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    React.createElement(component, props)
  ))
  return <Route {...rest} render={routeComponent} />
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
