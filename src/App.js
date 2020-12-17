import React from 'react';
import PageRouter from 'PageRouter';
import { Header, Footer } from 'Pages';

function App() {
  return (
    <div className="App">
        <Header />
        <PageRouter />
        <Footer />
    </div>
  );
}

export default App;
