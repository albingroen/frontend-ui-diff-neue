import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/userContext";

// Import components
import { Container } from "./components";
import { Signup, Dashboard } from "./views";
import { loggedIn } from "./lib/auth";

// Render routes
function App() {
  const [{ userId, token }] = useState<{
    userId: string | null;
    token: string | null;
  }>({
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token")
  });

  const userProviderValue = useMemo(() => ({ userId, token }), [userId, token]);

  return (
    <UserContext.Provider value={userProviderValue}>
      <BrowserRouter>
        <Switch>
          <Container>
            <Route path="/" component={loggedIn ? Dashboard : Signup} exact />
            <PrivateRoute path="/members" component={Dashboard} exact />
          </Container>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    loggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default App;
