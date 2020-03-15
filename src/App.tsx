import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";

// Import components
import { Container } from "./components";
import routes from "./routes";
import { AppContextProvider } from "./context";

// Render routes
function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Container>
            {routes.map((route: RouteProps) => (
              <Route {...route} key={Math.random()} />
            ))}
          </Container>
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
