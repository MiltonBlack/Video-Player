import React from 'react';
import {Router, Routes, Route} from 'react-router-dom'
import EdTutorPlayer from './components/container/EdTutorPlayer';
import './App.css';
import GlobalStyle from './components/styles/GlobalStyle';

function App(props) {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" component={EdTutorPlayer}/>
          <Route path="/:activevideo" component={EdTutorPlayer}/>
        </Routes>
        <GlobalStyle/>
      </>
    </Router>
  );
}

export default App;

// create a 404 not found component