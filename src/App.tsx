import React from 'react';
import styled from 'styled-components';
import { Heading } from '@primer/components';

const Container = styled.div`
  background: ${props => props.theme?.colors?.bg?.disabled};
  min-height: 100vh;
`

function App() {
  return (
    <Container>
      <Heading>frontend-ui-diff-neue</Heading>
    </Container>
  );
}

export default App;
