import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import components
import { Dashboard } from './views'
import { Container } from './components';

// Render routes
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
