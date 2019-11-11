import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Styles/Theme';
import Reset from './Styles/Reset';

const Container = styled.div`
  background: red;
  ${props=> props.theme.font}
`;

const GlobalStyles = createGlobalStyle`
  ${Reset}
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        asdf
      </Container>
    </ThemeProvider>
  );
}

export default App;
