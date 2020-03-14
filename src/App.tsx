import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import components
import { Dashboard } from "./views";
import { Container } from "./components";

// Render routes
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/" exact component={Dashboard} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
