import React from 'react';
import PageRouter from 'PageRouter';
import { Header, Home } from 'Pages';

function App() {
  return (
    <div className="App">
        <Header />
        <PageRouter />
    </div>
  );
}

export default App;
