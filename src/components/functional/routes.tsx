import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Auth, Signup, Login, EmailConfirmation, Dashboard, ResetPassword, CreatePasswordReset } from '../../views'
import { Container } from '../container'
import { loggedIn } from '../../lib/auth'

interface IRoutesProps {
  userIsLoading: boolean
}

const Routes: React.FC<IRoutesProps> = ({ userIsLoading }) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Auth routes */}
        <PublicRoute path="/auth" component={Auth} exact />
        <PublicRoute path="/signup" component={Signup} exact />
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/reset-password" component={CreatePasswordReset} exact />
        <PublicRoute path="/reset-password/:passwordResetId" component={ResetPassword} exact />
        <PublicRoute path="/confirmation/:userId" component={EmailConfirmation} exact />

        <Container loading={userIsLoading}>
          {/* Main route */}
          <Route path="/" component={loggedIn ? Dashboard : () => <Redirect to="/login" />} exact />

          {/* Private routes */}
          <PrivateRoute path="/members" component={Dashboard} exact />

          {/* Catch-all route */}
          <Route path="*" component={() => <Redirect to={loggedIn ? '/' : '/login'} />} exact />
        </Container>
      </Switch>
    </BrowserRouter>
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

export default Routes
