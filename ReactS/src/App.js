import React from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Main from './componens/Main';


function App(props) {
  return (
 <BrowserRouter> 
      <div className="App">
        <Header />
        <h1>Bücher und mehr</h1>
        <Main />
      </div>
 </BrowserRouter> 
  );
}

export default App;
