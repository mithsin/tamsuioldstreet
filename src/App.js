import React from 'react';
import PageRouter from 'PageRouter';
import { Header, Footer } from 'Pages';
import StateWrapper from 'Providers/StateWrapper';


function App() {
  return (
    <div className="App">
        <StateWrapper>
            <Header />
            <PageRouter />
            <Footer />
        </StateWrapper>
    </div>
  );
}

export default App;
