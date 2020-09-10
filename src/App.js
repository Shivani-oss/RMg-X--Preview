import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import { CssBaseline } from '@material-ui/core';


function App() {
  return (
    <div className="App">
    <CssBaseline>
    <Header />
    <Section />
    </CssBaseline>
    </div>
  );
}

export default App;
