import React from 'react';
import PageRouter from 'PageRouter';
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { Header, Footer } from 'PublicPages';
import StateWrapper from 'Providers/StateWrapper';
import { theme } from 'theme.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <StateWrapper>
              <Header />
              <PageRouter />
              <Footer />
          </StateWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
