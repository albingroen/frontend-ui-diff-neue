import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";

// Import components
import { Container } from "./components";
import routes from "./routes";

// Render routes
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          {routes.map((route: RouteProps) => (
            <Route {...route} key={Math.random()} />
          ))}
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
