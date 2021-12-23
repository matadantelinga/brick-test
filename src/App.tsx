import React from 'react';
import logo from './assets/github.png';
import './App.scss';
import Search from './components/Search/Search'

function App() {
  return (
    <div className="App Container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Text">
          <strong>Github Searcher</strong> <br />
          <span>Search user or repositories below</span>
        </div>
      </header>
      <body>
        <Search />
      </body>
    </div>
  );
}

export default App;
