import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Styles/Theme';
import Reset from './Styles/Reset';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home'

const GlobalStyles = createGlobalStyle`
  ${Reset}
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
