import React from 'react';
import PageRouter from 'PageRouter';
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { Header, Footer } from 'PublicPages';
import StateWrapper from 'Providers/StateWrapper';
import {useTheme} from 'react-jss';

function App() {
    const theme = useTheme();

  return (
    <div className="App">
        <StateWrapper>
            <Header theme={theme}/>
            <PageRouter />
            <Footer theme={theme}/>
        </StateWrapper>
    </div>
  );
}

export default App;
