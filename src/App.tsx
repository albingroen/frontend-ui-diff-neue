import React, { useState, useMemo } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from "react-router-dom";
import { UserContext } from "./context/userContext";

// Import components
import { Container } from "./components";
import routes from "./routes";

interface CustomRoute extends RouteProps {
  public?: boolean;
}

// Render routes
function App() {
  const [userId] = useState<string | null>(localStorage.getItem("userId"));

  const userProviderValue = useMemo(() => ({ userId }), [userId]);

  return (
    <UserContext.Provider value={userProviderValue}>
      <BrowserRouter>
        <Switch>
          <Container>
            {routes.map((route: CustomRoute) =>
              route.public ? (
                <Route {...route} key={Math.random()} />
              ) : userId ? (
                <Route {...route} key={Math.random()} />
              ) : (
                <Redirect to="/signup" />
              )
            )}
          </Container>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
